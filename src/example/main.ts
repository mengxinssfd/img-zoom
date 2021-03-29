import ImgZoom from "../index";
// import "../index.less";

new ImgZoom({
    scale: {
        step: -1,
    },
    triggerEl: [".img-zoom", document.querySelector("button") as HTMLElement],
});
