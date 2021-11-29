/*import {
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
} from "@mxssfd/ts-utils";*/
// import utils from "@mxssfd/ts-utils/lib-umd/index";
import { addClass, addScaleEventListener, assign, createElement, createHtmlElement, debounce, eventProxy, isArrayLike, isDom, isImgElement, isString, noScroll, onDragEvent, prefixStyle, removeClass, supportTouch } from "@mxssfd/ts-utils";
import { style } from "./style";
const transform = prefixStyle("transform");
const defaultScale = {
    max: 10,
    min: 0.1,
    step: 0.1,
    default: 1,
};
const defaultOptions = {
    triggerEl: ".img-zoom",
    isClickViewImgClose: false,
    dataset: "data-img-zoom",
};
const Log = process.env.NODE_ENV === "development" ? console.log : () => {
};
export default class ImgZoom {
    wrapper;
    zoomImg;
    scale;
    left;
    top;
    options;
    needCancelEventList = [];
    noScrollCanceller;
    constructor(options) {
        const opts = assign({}, defaultOptions, options || {});
        opts.scale = assign({}, defaultScale, opts.scale || {});
        this.options = opts;
        const sc = this.options.scale;
        const min = sc.min;
        const max = sc.max;
        const def = sc.default;
        const step = sc.step;
        if (max < min)
            throw new Error("scale.max不能小于scale.min");
        if (def < min)
            throw new Error("scale.default不能小于scale.min");
        if (def > max)
            throw new Error("scale.default不能大于scale.max");
        if (min <= 0)
            throw new Error("scale.min不能小于等于0");
        // 正负反过来，则滚轮放大缩小也反过来
        // if (step <= 0) throw new Error("scale.step不能小于等于0");
        if (step > max)
            console.warn("scale.step已大于scale.max");
        this.init();
    }
    init() {
        this.initView();
        this.addInitViewEventListener();
        this.initTrigger();
    }
    setImg(src) {
        this.scale = this.options.scale.default;
        this.zoomImg.src = src;
        removeClass(this.wrapper, "hide");
        const cancel = noScroll(window);
        this.noScrollCanceller = () => {
            this.noScrollCanceller = undefined;
            cancel();
        };
        // this.getViewPosition();
        this.resetViewScaleAndPosition();
        this.saveViewPositionFromMatrix();
    }
    initTrigger() {
        const handler = (e) => {
            // if (isTouch && !supportTouch()) return;
            const target = e.target;
            let src = target.getAttribute(this.options.dataset);
            if (!src && isImgElement(target)) {
                src = e.target.src;
            }
            if (!src)
                return;
            this.setImg(src);
        };
        const triggerEl = this.options.triggerEl;
        const trigger = isArrayLike(triggerEl) ? triggerEl : [triggerEl];
        const evList = this.needCancelEventList;
        Array.prototype.forEach.call(trigger, (it) => {
            if (isDom(it)) {
                it.addEventListener("click", handler);
                evList.push(() => {
                    it.removeEventListener("click", handler);
                });
            }
            if (isString(it)) {
                evList.push(eventProxy(null, "click", it, handler));
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
        this.needCancelEventList.push(() => {
            window.removeEventListener("resize", resizeHandler);
        });
    }
    resetViewScaleAndPosition() {
        this.zoomImg.style[transform] = `translate(-50%, -50%) scale(${this.scale})`;
    }
    // 手动计算宽高
    // @ts-ignore
    getViewPosition() {
        // window.innerHeight: ie9+    document.documentElement.clientHeight: ie8-
        const screenWidth = window.innerHeight || document.documentElement.clientHeight;
        const screenHeight = window.innerWidth || document.documentElement.clientWidth;
        const { offsetWidth: width, offsetHeight: height } = this.zoomImg;
        Log(screenWidth, screenHeight, width, height);
        this.left = (screenWidth - width) / 2;
        this.top = (screenHeight - height) / 2;
    }
    // 获取transform matrix里的值
    getZoomImgStyleMatrixVal() {
        // getComputedStyle 在ie6~8下不兼容 在ie6~8下可以使用currentStyle来获取所有经过浏览器计算过的样式
        const styleObject = getComputedStyle(this.zoomImg);
        const trVal = styleObject[transform];
        return (/matrix\(([\d\\.,\- ]+)\)/.test(trVal) ? RegExp.$1 : "0,0,0,0,0,0").split(/, ?/);
    }
    saveViewPositionFromMatrix() {
        const trValList = this.getZoomImgStyleMatrixVal();
        // return {x: trValList[4], y: trValList[5]};
        this.left = Number(trValList[4]) || 0;
        this.top = Number(trValList[5]) || 0;
    }
    setViewScaleAndPosition(addZ = false) {
        const scale = this.scale;
        const trValList = this.getZoomImgStyleMatrixVal();
        // const trValList: Array<string | number> = "0,0,0,0,0,0".split(",");
        // Log("setViewScaleAndPosition", trValList);
        trValList[0] = trValList[3] = scale;
        trValList[4] = this.left;
        trValList[5] = this.top;
        // ie9加了translateZ会隐藏图片
        this.zoomImg.style[transform] = `${addZ && supportTouch() ? "translateZ(0) " : ""}matrix(${trValList.join(", ")})`;
    }
    initView() {
        createElement("style", {
            props: {
                innerHTML: style,
            },
            parent: document.head,
        });
        const zoomImg = createElement("img", {
            props: {
                className: "img-zoom-view",
                draggable: false,
            },
            attrs: {
                ondragstart: "return false",
            },
        });
        this.wrapper = createElement("div", {
            props: { className: "img-zoom-wrapper hide" },
            children: [zoomImg],
            parent: document.body
        });
        this.zoomImg = zoomImg;
    }
    setScale(scale) {
        const scaleOpt = this.options.scale;
        this.scale = Math.max(scaleOpt.min, Math.min(scale, scaleOpt.max));
        this.setViewScaleAndPosition();
    }
    scaleIncrease() {
        const scaleOpt = this.options.scale;
        let scale = this.scale + scaleOpt.step;
        this.setScale(scale);
    }
    scaleDecrease() {
        const scaleOpt = this.options.scale;
        let scale = this.scale - scaleOpt.step;
        this.setScale(scale);
    }
    addInitViewEventListener() {
        const wrapper = this.wrapper;
        const zoomImg = this.zoomImg;
        // const startXY = {x: 0, y: 0};
        // const lastXY = {x: 0, y: 0};
        let upHandler = (isTouch = false) => (e) => {
            if (isTouch && supportTouch())
                return;
            Log("wrapper click");
            this.noScrollCanceller && this.noScrollCanceller();
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
            e = e || window.event;
            e.deltaY > 0 ? this.scaleDecrease() : this.scaleIncrease();
            e.stopPropagation();
            e.preventDefault();
            return false;
        });
        const view = createHtmlElement("div", {
            props: {
                style: {
                    position: "fixed",
                    zIndex: "11111111111111111",
                    top: "0",
                    left: "0",
                    background: "white",
                    padding: "20px",
                },
            },
        });
        addScaleEventListener(zoomImg, (d, start) => {
            /*const width = window.screen.width;
            const r1 = start / width;
            const r2 = d / width;
            this.setScale(this.scale + r2 - r1);*/
            this.setScale(this.scale / start * d);
            view.innerText = `${d} / ${start} / ${this.scale}`;
        });
        onDragEvent(({ onMove, onDown, onUp }) => {
            onDown((e) => {
                // touchstart事件会优先于mousedown事件，touchmove后不会触发mousedown事件
                // 所以move和up的事件不会同时触发两次
                Log(arguments);
                const left = this.getZoomImgStyleMatrixVal()[4];
                const top = this.getZoomImgStyleMatrixVal()[5];
                this.left = Number(left);
                this.top = Number(top);
                // 触摸屏不拦截事件的话，屏幕会滚动
                e.stopPropagation();
                e.preventDefault();
                return false;
            });
            onMove((e, move, last, up) => {
                const { x, y } = move;
                const moveX = ~~(x - last.x);
                const moveY = ~~(y - last.y);
                this.left += moveX;
                this.top += moveY;
                // Log("move", moveX, moveY, this.left, this.top);
                this.setViewScaleAndPosition(true);
            });
            onUp((e, currentXY, down) => {
                this.setViewScaleAndPosition();
                if (this.options.isClickViewImgClose && (currentXY.x === down.x || currentXY.y === down.y))
                    return;
                e.stopPropagation();
                e.preventDefault();
                return false;
            });
        }, { el: zoomImg });
    }
    destroy() {
        this.needCancelEventList.forEach(cancel => cancel());
        this.wrapper.parentNode.removeChild(this.wrapper);
    }
}
