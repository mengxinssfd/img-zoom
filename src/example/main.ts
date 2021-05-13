import ImgZoom from "../index";
// import "../index.less";

const iz = new ImgZoom({
    scale: {
        step: -1,
        min: 0.5,
    },
    triggerEl: [".img-zoom", document.querySelector("button") as HTMLElement],
});

window.addEventListener("keyup", function (e) {
    console.log(e);
    if (e.key === "a") {
        iz.destroy();
    }
});