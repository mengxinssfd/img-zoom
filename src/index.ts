import {
    eventProxy,
    addClass,
    debounce,
    addDragEventListener,
    prefixStyle,
    removeClass,
    createElement,
} from "@mxssfd/ts-utils";
// import utils from "@mxssfd/ts-utils/lib-umd/index-umd";
import {style} from "./style";
// import * as  utils from "@mxssfd/ts-utils/";
interface scaleOption {
    max?: number,
    min?: number,
    step?: number,
    default?: number,
}

interface options {
    triggerImgClass?: string, // 触发显示大图的img的class
    isClickViewImgClose?: boolean  // 是否点击图片时关闭大图
    scale?: scaleOption
}

const transform = prefixStyle("transform") as string;
const defaultScale: scaleOption = {
    max: 10,
    min: 0.1,
    step: 0.1,
    default: 1,
};
const defaultOptions: options = {
    triggerImgClass: "img-zoom",
    isClickViewImgClose: false,
};
const Log: (...args: any[]) => void = process.env.NODE_ENV === "development" ? console.log : () => {
};
export default class ImgZoom {
    wrapper!: HTMLElement;
    zoomImg!: HTMLImageElement;
    scale!: number;
    left!: number;
    top!: number;
    options: options;

    // triggerImgClass: string;
    constructor(options?: options) {
        // option chain不支持
        // this.triggerImgClass = options?.triggerImgClass;
        this.options = Object.assign({}, defaultOptions, options);
        this.options.scale = Object.assign({}, defaultScale, this.options.scale);
        const sc = this.options!.scale;
        const min = sc.min as number;
        const max = sc.max as number;
        const def = sc.default as number;
        const step = sc.step as number;
        if (max < min) throw new Error("scale.max不能小于scale.min");
        if (def < min) throw new Error("scale.default不能小于scale.min");
        if (def > max) throw new Error("scale.default不能大于scale.max");
        if (min <= 0) throw new Error("scale.min不能小于等于0");
        if (step <= 0) throw new Error("scale.step不能小于等于0");
        if (step > max) console.warn("scale.step已大于scale.max");
        this.init();
    }

    private init() {
        this.initView();
        this.addBodyEventListener();
    }

    public setImg(src: string) {
        this.scale = this.options.scale!.default as number;
        this.zoomImg.src = src;
        removeClass(this.wrapper, "hide");
        // this.getViewPosition();
        this.resetViewScaleAndPosition();
        this.getViewPositionFromMatrix();
    }

    private addBodyEventListener() {
        const handler = (isTouch = false) => (e) => {
            if (isTouch && this.isSupportTouch()) return;
            const target = e.target;
            // TODO data-zoom-src通过配置设置
            let src = target.getAttribute("data-zoom-src");
            // TODO 判断是否img应使用新的utilTs判断
            if (!src && target.nodeName === "IMG") {
                src = (e.target as HTMLImageElement).src;
            }
            if (!src) return;
            this.setImg(src);
        };
        const target = "img" + (this.options.triggerImgClass ? "." : "") + this.options.triggerImgClass;
        // 普通图片点击
        eventProxy(
            null,
            "click",
            target,
            handler(),
        );
        eventProxy(
            null,
            "touchend",
            target,
            handler(true),
        );
        // 只有window可以添加resize事件
        const resizeHandler = debounce(() => {
            Log("resize");
            // this.getViewPosition();
            this.resetViewScaleAndPosition();
            this.getViewPositionFromMatrix();
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

    private isSupportTouch(): boolean {
        return "ontouchstart" in window;
    }

    // 获取transform matrix里的值
    private getZoomImgStyleMatrixVal(): Array<string> {
        // getComputedStyle 在ie6~8下不兼容 在ie6~8下可以使用currentStyle来获取所有经过浏览器计算过的样式
        const styleObject = getComputedStyle(this.zoomImg);
        const trVal: string = styleObject[transform];
        return (/matrix\(([\d\\.,\- ]+)\)/.test(trVal) ? RegExp.$1 : "0,0,0,0,0,0").split(/, ?/);
    }

    private getViewPositionFromMatrix() {
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
        this.zoomImg.style[transform] = `${addZ && this.isSupportTouch() ? "translateZ(0) " : ""}matrix(${trValList.join(", ")})`;
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
        this.initViewEventListener();
    }

    private initViewEventListener() {
        const wrapper = this.wrapper;
        const zoomImg = this.zoomImg;
        // const startXY = {x: 0, y: 0};
        // const lastXY = {x: 0, y: 0};
        let upHandler = (isTouch = false) => (e: Event) => {
            if (isTouch && this.isSupportTouch()) return;
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
            const scaleOpt = this.options.scale;
            const optStep = scaleOpt!.step as number;
            const min = scaleOpt!.min as number;
            const max = scaleOpt!.max as number;
            const step = e.deltaY > 0 ? -optStep : optStep;
            let scale = this.scale + step;
            if (scale > max) scale = max;
            if (scale < min) scale = min;
            this.scale = scale;
            this.setViewScaleAndPosition();
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
                console.log(arguments);
            },
        });
    }
}
