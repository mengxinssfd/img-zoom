import utils from "@mxssfd/ts-utils";
import { style } from "./style";
const transform = utils.prefixStyle("transform");
const defaultScale = {
    max: 10,
    min: 0.1,
    step: 0.1,
    default: 1,
};
const defaultOptions = {
    triggerImgClass: "img-zoom",
    isClickViewImgClose: false,
};
const Log = process.env.NODE_ENV === "development" ? console.log : () => {
};
export default class ImgZoom {
    // triggerImgClass: string;
    constructor(options) {
        // option chain不支持
        // this.triggerImgClass = options?.triggerImgClass;
        this.options = Object.assign({}, defaultOptions, options);
        this.options.scale = Object.assign({}, defaultScale, this.options.scale);
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
        if (step <= 0)
            throw new Error("scale.step不能小于等于0");
        if (step > max)
            console.warn("scale.step已大于scale.max");
        this.init();
    }
    init() {
        this.initView();
        this.addBodyEventListener();
    }
    addBodyEventListener() {
        // 普通图片点击
        utils.eventProxy(null, "click", "img." + this.options.triggerImgClass, (e) => {
            this.scale = this.options.scale.default;
            this.zoomImg.src = e.target.src;
            utils.removeClass(this.wrapper, "hide");
            // this.getViewPosition();
            this.resetViewScaleAndPosition();
            this.getViewPositionFromMatrix();
        });
        // 只有window可以添加resize事件
        const resizeHandler = utils.debounce(() => {
            Log("resize");
            // this.getViewPosition();
            this.resetViewScaleAndPosition();
            this.getViewPositionFromMatrix();
        }, 100);
        window.addEventListener("resize", resizeHandler);
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
        return (/matrix\(([\d\\.\,\- ]+)\)/.test(trVal) ? RegExp.$1 : "0,0,0,0,0,0").split(/, ?/);
    }
    getViewPositionFromMatrix() {
        const trValList = this.getZoomImgStyleMatrixVal();
        // return {x: trValList[4], y: trValList[5]};
        this.left = Number(trValList[4]) || 0;
        this.top = Number(trValList[5]) || 0;
    }
    setViewScaleAndPosition() {
        const scale = this.scale;
        const trValList = this.getZoomImgStyleMatrixVal();
        // const trValList: Array<string | number> = "0,0,0,0,0,0".split(",");
        Log("wheel", trValList);
        trValList[0] = trValList[3] = scale;
        trValList[4] = this.left;
        trValList[5] = this.top;
        this.zoomImg.style[transform] = `matrix(${trValList.join(", ")})`;
    }
    initView() {
        const styleEl = document.createElement("style");
        styleEl.innerHTML = style;
        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "img-zoom-wrapper hide");
        const zoomImg = document.createElement("img");
        zoomImg.setAttribute("class", "img-zoom-view");
        zoomImg.setAttribute("draggable", "false");
        zoomImg.setAttribute("ondragstart", "return false");
        document.head.appendChild(styleEl);
        wrapper.appendChild(zoomImg);
        document.body.appendChild(wrapper);
        this.zoomImg = zoomImg;
        this.wrapper = wrapper;
        this.initViewEventListener();
    }
    initViewEventListener() {
        const wrapper = this.wrapper;
        const zoomImg = this.zoomImg;
        const startXY = { x: 0, y: 0 };
        const lastXY = { x: 0, y: 0 };
        wrapper.addEventListener("mouseup", () => {
            Log("wrapper click");
            utils.addClass(this.wrapper, "hide");
        });
        wrapper.addEventListener("wheel", (e) => {
            e = e || window.event;
            const scaleOpt = this.options.scale;
            const optStep = scaleOpt.step;
            const min = scaleOpt.min;
            const max = scaleOpt.max;
            const step = e.deltaY > 0 ? -optStep : optStep;
            let scale = this.scale + step;
            if (scale > max)
                scale = max;
            if (scale < min)
                scale = min;
            this.scale = scale;
            this.setViewScaleAndPosition();
            e.stopPropagation();
            e.preventDefault();
            return false;
        });
        const mouseMoveHandler = (e) => {
            e = e || window.event;
            const { screenX: x, screenY: y } = e;
            const moveX = ~~(x - lastXY.x);
            const moveY = ~~(y - lastXY.y);
            this.left += moveX;
            this.top += moveY;
            lastXY.x = x;
            lastXY.y = y;
            Log("move", moveX, moveY, this.left, this.top);
            this.setViewScaleAndPosition();
        };
        const mouseUpHandler = (e) => {
            e = e || window.event;
            document.documentElement.removeEventListener("mousemove", mouseMoveHandler);
            document.documentElement.removeEventListener("mouseup", mouseUpHandler, true);
            // 设置点击关闭并且鼠标未拖动 让事件通过=>关闭大图
            if (this.options.isClickViewImgClose && (e.screenX === startXY.x || e.screenY === startXY.y))
                return;
            e.stopPropagation();
            e.preventDefault();
            return false;
        };
        zoomImg.addEventListener("mousedown", (e) => {
            e = e || window.event;
            Log(e);
            startXY.x = e.screenX;
            startXY.y = e.screenY;
            lastXY.x = e.screenX;
            lastXY.y = e.screenY;
            document.documentElement.addEventListener("mousemove", mouseMoveHandler);
            document.documentElement.addEventListener("mouseup", mouseUpHandler, true);
        });
    }
}
