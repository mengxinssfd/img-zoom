interface ScaleOption {
    max?: number;
    min?: number;
    step?: number;
    default?: number;
}
interface Options {
    triggerEl?: string | Array<string | HTMLElement> | NodeListOf<HTMLElement>;
    isClickViewImgClose?: boolean;
    scale?: ScaleOption;
    dataset?: string;
}
export default class ImgZoom {
    private wrapper;
    private zoomImg;
    private scale;
    private left;
    private top;
    private options;
    private needCancelEventList;
    private noScrollCanceller?;
    /**
     * @param [options = { max: 10,min: 0.1,step: 0.1,default: 1}]
     */
    constructor(options?: Options);
    private init;
    setImg(src: string): void;
    private initTrigger;
    private resetViewScaleAndPosition;
    private getViewPosition;
    private getZoomImgStyleMatrixVal;
    private saveViewPositionFromMatrix;
    private setViewScaleAndPosition;
    private initView;
    setScale(scale: number): void;
    scaleIncrease(): void;
    scaleDecrease(): void;
    private addInitViewEventListener;
    destroy(): void;
}
export {};
