import utils from "@mxssfd/ts-utils";
// const utils = require("./utils");
// import * as utils from "@mxssfd/ts-utils";
interface options {
    triggerImgClass?: string,
}
const SCALE = {
    max: 10,
    min: 0.1,
    default: 1,
};
const transform = utils.prefixStyle("transform") as string;
const defaultTriggerImgClass = "img-zoom";
// TODO 显示图片的时候应该网页禁止滚动
export class ImgZoom {
    wrapper: HTMLElement;
    zoomImg: HTMLImageElement;
    scale = SCALE.default;
    left: number;
    top: number;
    triggerImgClass: string;
    constructor(options?: options) {
        // option chain不支持
        // this.triggerImgClass = options?.triggerImgClass;
        this.triggerImgClass = options && options.triggerImgClass ? options.triggerImgClass : defaultTriggerImgClass;
        this.init();
    }
    private init() {
        this.initView();
        this.addBodyEventListener();
    }
    private addBodyEventListener() {
        // 普通图片点击
        utils.eventProxy(
            null,
            "click",
            "img." + this.triggerImgClass,
            (e) => {
                this.scale = SCALE.default;
                this.zoomImg.src = (e.target as HTMLImageElement).src;
                utils.removeClass(this.wrapper, "hide");
                // this.getViewPosition();
                this.resetViewScaleAndPosition();
                this.getViewPositionFromMatrix();
            },
        );
        // 只有window可以添加resize事件
        const resizeHandler = utils.debounce(() => {
            console.log("resize");
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
    private getViewPosition() {
        // window.innerHeight: ie9+    document.documentElement.clientHeight: ie8-
        const screenWidth: number = window.innerHeight || document.documentElement.clientHeight;
        const screenHeight: number = window.innerWidth || document.documentElement.clientWidth;
        const {offsetWidth: width, offsetHeight: height} = this.zoomImg;
        console.log(screenWidth, screenHeight, width, height);
        this.left = (screenWidth - width) / 2;
        this.top = (screenHeight - height) / 2;
    }
    private getViewPositionFromMatrix() {
        // getComputedStyle 在ie6~8下不兼容 在ie6~8下可以使用currentStyle来获取所有经过浏览器计算过的样式
        const styleObject = getComputedStyle(this.zoomImg);
        const trVal: string = styleObject[transform];
        const trValList: Array<string | number> = (/matrix\(([\d\\.\,\- ]+)\)/.test(trVal) ? RegExp.$1 : "0,0,0,0,0,0").split(/, ?/);
        // console.log("gggggggggg", styleObject.transform,this.zoomImg.getComputed trVal);
        // const myDiv = this.zoomImg;
        // @ts-ignore
        // console.log()
        // const s = (myDiv as HTML).currentStyle ? myDiv.currentStyle : document.defaultView.getComputedStyle(myDiv, null);
        // console.log("sssss", s.transform);
        // return {x: trValList[4], y: trValList[5]};
        this.left = Number(trValList[4]) || 0;
        this.top = Number(trValList[5]) || 0;
    }
    private setViewScaleAndPosition() {
        const scale = this.scale;
        const trVal: string = getComputedStyle(this.zoomImg)[transform];
        const trValList: Array<string | number> = (/matrix\(([\d\\.\,\- ]+)\)/.test(trVal) ? RegExp.$1 : "0,0,0,0,0,0").split(/, ?/);
        // const trValList: Array<string | number> = "0,0,0,0,0,0".split(",");
        console.log("wheel", trValList);
        trValList[0] = trValList[3] = scale;
        trValList[4] = this.left;
        trValList[5] = this.top;
        this.zoomImg.style[transform] = `matrix(${trValList.join(", ")})`;
    }
    private initView() {
        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "img-zoom-wrapper hide");
        const zoomImg = document.createElement("img");
        zoomImg.setAttribute("class", "img-zoom-view");
        zoomImg.setAttribute("draggable", "false");
        wrapper.appendChild(zoomImg);
        document.body.appendChild(wrapper);
        this.zoomImg = zoomImg;
        this.wrapper = wrapper;
        this.initViewEventListener();
    }
    private initViewEventListener() {
        const wrapper = this.wrapper;
        const zoomImg = this.zoomImg;
        const startXY = {x: 0, y: 0};
        const moveXY = {x: 0, y: 0};
        wrapper.addEventListener("mouseup", () => {
            console.log("wrapper click");
            // TODO utils.addClass在ie9里面有问题 疑似非classList里面的问题
            utils.addClass(this.wrapper, "hide");
        });
        wrapper.addEventListener("wheel", (e) => {
            e = e || (window.event as WheelEvent);
            const step = e.deltaY > 0 ? -0.1 : 0.1;
            let scale = this.scale + step;
            if (scale > SCALE.max || scale < SCALE.min) return;
            this.scale = scale;
            this.setViewScaleAndPosition();
        });
        const mouseMoveHandler = (e) => {
            e = e || (window.event as WheelEvent);
            const {screenX: x, screenY: y} = e;
            const moveX = ~~(x - moveXY.x);
            const moveY = ~~(y - moveXY.y);
            this.left += moveX;
            this.top += moveY;
            moveXY.x = x;
            moveXY.y = y;
            console.log("move", moveX, moveY, this.left, this.top);
            this.setViewScaleAndPosition();
        };
        const mouseUpHandler = (e) => {
            e = e || (window.event as WheelEvent);
            document.documentElement.removeEventListener("mousemove", mouseMoveHandler);
            console.log(e.screenX !== startXY.x || e.screenY !== startXY.y);
            document.documentElement.removeEventListener("mouseup", mouseUpHandler, true);
            if (e.screenX !== startXY.x || e.screenY !== startXY.y) {
                console.log("stop");
                e.stopPropagation();
                e.preventDefault();
                return false;
            }
        };
        zoomImg.addEventListener("mousedown", (e) => {
            e = e || (window.event as WheelEvent);
            console.log(e);
            startXY.x = e.screenX;
            startXY.y = e.screenY;
            moveXY.x = e.screenX;
            moveXY.y = e.screenY;
            document.documentElement.addEventListener("mousemove", mouseMoveHandler);
            document.documentElement.addEventListener("mouseup", mouseUpHandler, true);
        });
    }
}