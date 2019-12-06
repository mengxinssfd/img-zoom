interface scaleOption {
    max?: number;
    min?: number;
    step?: number;
    default?: number;
}
interface options {
    triggerImgClass?: string;
    isClickViewImgClose?: boolean;
    scale?: scaleOption;
}
export default class ImgZoom {
    wrapper: HTMLElement;
    zoomImg: HTMLImageElement;
    scale: number;
    left: number;
    top: number;
    options: options;
    constructor(options?: options);
    private init;
    private addBodyEventListener;
    private resetViewScaleAndPosition;
    private getViewPosition;
    private getZoomImgStyleMatrixVal;
    private getViewPositionFromMatrix;
    private setViewScaleAndPosition;
    private initView;
    private initViewEventListener;
}
export {};
