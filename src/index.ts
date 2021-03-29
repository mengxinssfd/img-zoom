import {
    eventProxy,
    addClass,
    debounce,
    addDragEventListener,
    prefixStyle,
    removeClass,
    createElement,
    assign,
    isImgElement,
    supportTouch,
    isArrayLike,
    isDom,
    isString,
} from "@mxssfd/ts-utils";
// import utils from "@mxssfd/ts-utils/lib-umd/index-umd";
import {style} from "./style";

// import * as  utils from "@mxssfd/ts-utils/";
interface ScaleOption {
    max?: number,
    min?: number,
    step?: number,
    default?: number,
}

interface Options {
    triggerEl?: string | Array<string | HTMLElement> | NodeListOf<HTMLElement>, // 触发显示大图的img的class
    isClickViewImgClose?: boolean  // 是否点击图片时关闭大图
    scale?: ScaleOption,
    dataset?: string, // 非img标签触发事件上必须有dataset保存图片地址
}

type RequiredOptions = { scale: Required<ScaleOption> } & Required<Options>

const transform = prefixStyle("transform") as string;
const DefaultScale: ScaleOption = {
    max: 10,
    min: 0.1,
    step: 0.1,
    default: 1,
};
const defaultOptions: Options = {
    triggerEl: ".img-zoom",
    isClickViewImgClose: false,
    dataset: "data-img-zoom",
};
const Log: (...args: any[]) => void = process.env.NODE_ENV === "development" ? console.log : () => {
};
export default class ImgZoom {
    wrapper!: HTMLElement;
    zoomImg!: HTMLImageElement;
    scale!: number;
    left!: number;
    top!: number;
    options!: RequiredOptions;

    constructor(options?: Options) {
        const opts = assign({}, defaultOptions, options || {}) as RequiredOptions;
        opts.scale = assign({}, DefaultScale, opts.scale || {});
        this.options = opts;
        const sc = this.options!.scale;
        const min = sc.min as number;
        const max = sc.max as number;
        const def = sc.default as number;
        const step = sc.step as number;
        if (max < min) throw new Error("scale.max不能小于scale.min");
        if (def < min) throw new Error("scale.default不能小于scale.min");
        if (def > max) throw new Error("scale.default不能大于scale.max");
        if (min <= 0) throw new Error("scale.min不能小于等于0");
        // 正负反过来，则滚轮放大缩小也反过来
        // if (step <= 0) throw new Error("scale.step不能小于等于0");
        if (step > max) console.warn("scale.step已大于scale.max");
        this.init();
    }

    private init() {
        this.initView();
        this.addInitViewEventListener();
        this.initTrigger();
    }

    public setImg(src: string) {
        this.scale = this.options.scale!.default as number;
        this.zoomImg.src = src;
        removeClass(this.wrapper, "hide");
        // this.getViewPosition();
        this.resetViewScaleAndPosition();
        this.saveViewPositionFromMatrix();
    }

    private initTrigger() {
        const handler = (e) => {
            // if (isTouch && !supportTouch()) return;
            const target = e.target;
            let src = target.getAttribute(this.options.dataset);
            if (!src && isImgElement(target)) {
                src = e.target.src;
            }
            if (!src) return;
            this.setImg(src);
        };
        const triggerEl = this.options.triggerEl;
        let trigger = isArrayLike(triggerEl) ? triggerEl : [triggerEl];
        Array.prototype.forEach.call(trigger, (it) => {
            if (isDom(it)) {
                it.addEventListener("click", handler);
            }
            if (isString(it)) {
                eventProxy(
                    null,
                    "click",
                    it,
                    handler,
                );
            }
        });

        /* eventProxy(
             null,
             "touchend",
             target,
             handler(true),
         );*/
        // 只有window可以添加resize事件
        const resizeHandler = debounce(() => {
            Log("resize");
            // this.getViewPosition();
            this.resetViewScaleAndPosition();
            this.saveViewPositionFromMatrix();
        }, 100);
        window.addEventListener("resize", resizeHandler);
    }

    private resetViewScaleAndPosition() {
        this.zoomImg.style[transform] = `translate(-50%, -50%) scale(${this.scale})`;
    }

    // 手动计算宽高
    // @ts-ignore
    private getViewPosition() {
        // window.innerHeight: ie9+    document.documentElement.clientHeight: ie8-
        const screenWidth: number = window.innerHeight || document.documentElement.clientHeight;
        const screenHeight: number = window.innerWidth || document.documentElement.clientWidth;
        const {offsetWidth: width, offsetHeight: height} = this.zoomImg;
        Log(screenWidth, screenHeight, width, height);
        this.left = (screenWidth - width) / 2;
        this.top = (screenHeight - height) / 2;
    }

    // 获取transform matrix里的值
    private getZoomImgStyleMatrixVal(): Array<string> {
        // getComputedStyle 在ie6~8下不兼容 在ie6~8下可以使用currentStyle来获取所有经过浏览器计算过的样式
        const styleObject = getComputedStyle(this.zoomImg);
        const trVal: string = styleObject[transform];
        return (/matrix\(([\d\\.,\- ]+)\)/.test(trVal) ? RegExp.$1 : "0,0,0,0,0,0").split(/, ?/);
    }

    private saveViewPositionFromMatrix() {
        const trValList = this.getZoomImgStyleMatrixVal();
        // return {x: trValList[4], y: trValList[5]};
        this.left = Number(trValList[4]) || 0;
        this.top = Number(trValList[5]) || 0;
    }

    private setViewScaleAndPosition(addZ = false) {
        const scale = this.scale;
        const trValList: Array<string | number> = this.getZoomImgStyleMatrixVal();
        // const trValList: Array<string | number> = "0,0,0,0,0,0".split(",");
        // Log("setViewScaleAndPosition", trValList);
        trValList[0] = trValList[3] = scale;
        trValList[4] = this.left;
        trValList[5] = this.top;
        // ie9加了translateZ会隐藏图片
        this.zoomImg.style[transform] = `${addZ && supportTouch() ? "translateZ(0) " : ""}matrix(${trValList.join(", ")})`;
    }

    private initView() {
        const styleEl = document.createElement("style");
        styleEl.innerHTML = style;
        const wrapper = createElement("div", {class: "img-zoom-wrapper hide"});
        const zoomImg = createElement("img", {
            class: "img-zoom-view",
            draggable: "false",
            ondragstart: "return false",
        });
        document.head.appendChild(styleEl);
        wrapper.appendChild(zoomImg);
        document.body.appendChild(wrapper);
        this.zoomImg = zoomImg;
        this.wrapper = wrapper;
    }

    public scaleIncrease() {
        const scaleOpt = this.options.scale;
        const max = scaleOpt.max;
        let scale = this.scale + scaleOpt.step;
        if (scale > max) scale = max;
        this.scale = scale;
        this.setViewScaleAndPosition();
    }

    public scaleDecrease() {
        const scaleOpt = this.options.scale;
        const min = scaleOpt.min;
        let scale = this.scale - scaleOpt.step;
        if (scale < min) scale = min;
        this.scale = scale;
        this.setViewScaleAndPosition();
    }

    private addInitViewEventListener() {
        const wrapper = this.wrapper;
        const zoomImg = this.zoomImg;
        // const startXY = {x: 0, y: 0};
        // const lastXY = {x: 0, y: 0};
        let upHandler = (isTouch = false) => (e: Event) => {
            if (isTouch && supportTouch()) return;
            Log("wrapper click");
            addClass(this.wrapper, "hide");
            e.stopPropagation();
            e.preventDefault();
            return false;
        };
        // 关闭大图
        wrapper.addEventListener("mouseup", upHandler());
        wrapper.addEventListener("touchend", upHandler(true));
        wrapper.addEventListener("touchcancel", upHandler(true));
        wrapper.addEventListener("wheel", (e) => {
            e = e || (window.event as WheelEvent);
            e.deltaY > 0 ? this.scaleDecrease() : this.scaleIncrease();
            e.stopPropagation();
            e.preventDefault();
            return false;
        });
        addDragEventListener({
            el: zoomImg,
            onMove: (e, move, last, up) => {
                const {x, y} = move;
                const moveX = ~~(x - last.x);
                const moveY = ~~(y - last.y);
                this.left += moveX;
                this.top += moveY;
                // Log("move", moveX, moveY, this.left, this.top);
                this.setViewScaleAndPosition(true);
            },
            onUp: (e, currentXY, down) => {
                this.setViewScaleAndPosition();
                if (this.options.isClickViewImgClose && (currentXY.x === down.x || currentXY.y === down.y)) return;
                e.stopPropagation();
                e.preventDefault();
                return false;
            },
            onDown() {
                // touchstart事件会优先于mousedown事件，touchmove后不会触发mousedown事件
                // 所以move和up的事件不会同时触发两次
                Log(arguments);
            },
        });
    }
}
