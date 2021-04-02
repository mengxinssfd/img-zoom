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
import * as utils from "@mxssfd/ts-utils";
import { style } from "./style";
const transform = utils.prefixStyle("transform");
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
    constructor(options) {
        this.needCancelEventList = [];
        const opts = utils.assign({}, defaultOptions, options || {});
        opts.scale = utils.assign({}, defaultScale, opts.scale || {});
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
        utils.removeClass(this.wrapper, "hide");
        // this.getViewPosition();
        this.resetViewScaleAndPosition();
        this.saveViewPositionFromMatrix();
    }
    initTrigger() {
        const handler = (e) => {
            // if (isTouch && !supportTouch()) return;
            const target = e.target;
            let src = target.getAttribute(this.options.dataset);
            if (!src && utils.isImgElement(target)) {
                src = e.target.src;
            }
            if (!src)
                return;
            this.setImg(src);
        };
        const triggerEl = this.options.triggerEl;
        const trigger = utils.isArrayLike(triggerEl) ? triggerEl : [triggerEl];
        const evList = this.needCancelEventList;
        Array.prototype.forEach.call(trigger, (it) => {
            if (utils.isDom(it)) {
                it.addEventListener("click", handler);
                evList.push(() => {
                    it.removeEventListener("click", handler);
                });
            }
            if (utils.isString(it)) {
                evList.push(utils.eventProxy(null, "click", it, handler));
            }
        });
        /* eventProxy(
             null,
             "touchend",
             target,
             handler(true),
         );*/
        // 只有window可以添加resize事件
        const resizeHandler = utils.debounce(() => {
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
        this.zoomImg.style[transform] = `${addZ && utils.supportTouch() ? "translateZ(0) " : ""}matrix(${trValList.join(", ")})`;
    }
    initView() {
        const styleEl = document.createElement("style");
        styleEl.innerHTML = style;
        const wrapper = utils.createElement("div", { class: "img-zoom-wrapper hide" });
        const zoomImg = utils.createElement("img", {
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
    scaleIncrease() {
        const scaleOpt = this.options.scale;
        const max = scaleOpt.max;
        let scale = this.scale + scaleOpt.step;
        if (scale > max)
            scale = max;
        this.scale = scale;
        this.setViewScaleAndPosition();
    }
    scaleDecrease() {
        const scaleOpt = this.options.scale;
        const min = scaleOpt.min;
        let scale = this.scale - scaleOpt.step;
        if (scale < min)
            scale = min;
        this.scale = scale;
        this.setViewScaleAndPosition();
    }
    addInitViewEventListener() {
        const wrapper = this.wrapper;
        const zoomImg = this.zoomImg;
        // const startXY = {x: 0, y: 0};
        // const lastXY = {x: 0, y: 0};
        let upHandler = (isTouch = false) => (e) => {
            if (isTouch && utils.supportTouch())
                return;
            Log("wrapper click");
            utils.addClass(this.wrapper, "hide");
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
        utils.addDragEventListener({
            el: zoomImg,
            onMove: (e, move, last, up) => {
                const { x, y } = move;
                const moveX = ~~(x - last.x);
                const moveY = ~~(y - last.y);
                this.left += moveX;
                this.top += moveY;
                // Log("move", moveX, moveY, this.left, this.top);
                this.setViewScaleAndPosition(true);
            },
            onUp: (e, currentXY, down) => {
                this.setViewScaleAndPosition();
                if (this.options.isClickViewImgClose && (currentXY.x === down.x || currentXY.y === down.y))
                    return;
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
    destroy() {
        this.needCancelEventList.forEach(cancel => cancel());
        this.wrapper.parentNode.removeChild(this.wrapper);
    }
}
