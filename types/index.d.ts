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
declare type RequiredOptions = {
    scale: Required<ScaleOption>;
} & Required<Options>;
export default class ImgZoom {
    wrapper: HTMLElement;
    zoomImg: HTMLImageElement;
    scale: number;
    left: number;
    top: number;
    options: RequiredOptions;
    needCancelEventList: (() => void)[];
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
    scaleIncrease(): void;
    scaleDecrease(): void;
    private addInitViewEventListener;
    destroy(): void;
}
export {};
