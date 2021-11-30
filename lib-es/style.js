export const style = `
.img-zoom-wrapper {
  z-index: 10000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: zoom-out;
}
.img-zoom-wrapper.hide {
  display: none;
}
.img-zoom-wrapper .img-zoom-view {
  z-index: 1000000;
  position: fixed;
  left: 50%;
  top: 50%;
  display: block;
  width: auto;
  height: auto;
  cursor: move;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  user-select: none;
  border: none;
  outline: none;
}
`.replace(/[\n\r]/g, "");
