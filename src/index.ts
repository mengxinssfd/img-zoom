import * as utils from "@mxssfd/ts-utils";

interface options {
    el: string | HTMLElement,
}
export class ImgZoom {
    constructor(options: options) {
        this.init();
    }
    private init() {
        this.setView();
        this.addBodyEventListener();
    }
    private addBodyEventListener() {
        document.documentElement.addEventListener("click", () => {
            console.log(this);
        });
    }
    private setView() {
        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "img-zoom-wrapper");
        wrapper.innerHTML = `
             <img class="img-zoom-target" alt=""/>
        `;
        document.body.appendChild(wrapper);
    }
}