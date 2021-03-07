# 点击img图片 缩放显示大图插件

兼容ie9及以上

## Installation(安装)

```shell
npm install @mxssfd/img-zoom
```
或者cdn方式
```html
<script src="https://cdn.jsdelivr.net/npm/mengxinssfd/img-zoom@main/img/"></script>
```

## Usage(使用方法)

```javascript
// 使用该方式需babel编译后才支持ie 或者 import ImgZoom form "@mxssfd/img-zoom/lib-umd"
// 如果项目已使用babel建议使用此方法
import ImgZoom

form
"@mxssfd/img-zoom";
new ImgZoom(options);
```

或者

```html

<script src="lib-umd/index.js"></script>
<script>
    new ImgZoom(options);
</script>
```

## Options and Defaults(参数与默认参数)

```typescript
interface scaleOption {
    max?: number,  // 最大缩放倍数
    min?: number, // 最小缩放倍数
    step?: number, // 滚轮滚动一次的缩放倍数
    default?: number, // 点开图片时显示的缩放倍数
}

// 默认scale
const defaultScale: scaleOption = {
    max: 10,
    min: 0.1,
    step: 0.1,
    default: 1,
};

interface options {
    triggerImgClass?: string, // 触发显示大图的img的class
    isClickViewImgClose?: boolean  // 是否点击图片时关闭大图
    scale?: scaleOption
}

// 默认options
const defaultOptions: options = {
    triggerImgClass: "img-zoom",
    isClickViewImgClose: false,
};

// 等于
new ImgZoom({
    scale: {
        max: 10,
        min: 0.1,
        step: 0.1,
        default: 1,
    },
    triggerImgClass: "img-zoom",
    isClickViewImgClose: false,
});
```

