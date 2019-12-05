import utils from "@mxssfd/ts-utils";
// const utils = require("./utils");
// import * as utils from "@mxssfd/ts-utils";
interface options {
    el: string | HTMLElement,
}
const defaultScale = 1;
export class ImgZoom {
    private wrapper: HTMLElement;
    private zoomImg: HTMLImageElement;
    scale = defaultScale;
    constructor(options: options) {
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
            "img.img-zoom",
            (e) => {
                this.scale = defaultScale;
                this.zoomImg.src = (e.target as HTMLImageElement).src;
                utils.removeClass(this.wrapper, "hide");
            },
        );
    }
    private initView() {
        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "img-zoom-wrapper hide");
        const zoomImg = document.createElement("img");
        zoomImg.setAttribute("class", "img-zoom-view");
        wrapper.addEventListener("click", () => {
            utils.addClass(this.wrapper, "hide");
        });
        wrapper.addEventListener("wheel", (e) => {
            e = e || (window.event as WheelEvent);
            // @ts-ignore
            console.log("sssssssssssssd", e, e.deltaY);
            // const direct = e.wheelDelta || e.deltaY;
        });
        wrapper.appendChild(zoomImg);
        document.body.appendChild(wrapper);
        this.zoomImg = zoomImg;
        this.wrapper = wrapper;
    }
}