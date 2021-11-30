# 点击img图片 缩放显示大图插件

兼容ie9及以上

## example
[example](https://codepen.io/mengxinssfd/pen/jOGOaKN)

## Installation(安装)

```shell
npm install @mxssfd/img-zoom
```
或者cdn方式
```html
<script src="https://cdn.jsdelivr.net/npm/@mxssfd/img-zoom@1.2.5/lib-umd/index.min.js"></script>
```

## Usage(使用方法)

```javascript
// 使用该方式需babel编译后才支持ie 或者 import ImgZoom form "@mxssfd/img-zoom/lib-umd"
// 如果项目已使用babel建议使用此方法
import ImgZoom from "@mxssfd/img-zoom";
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
    triggerEl?: string | Array<string | HTMLElement> | NodeListOf<HTMLElement>, // 触发显示大图的img的class或元素
    isClickViewImgClose?: boolean  // 是否点击图片时关闭大图
    scale?: ScaleOption, // 缩放
    dataset?: string, // 非img标签触发事件上必须有dataset保存图片地址
}

// 默认options
const defaultOptions: Options = {
    triggerEl: ".img-zoom",
    isClickViewImgClose: false,
    dataset: "data-img-zoom",
};

// 等于
new ImgZoom({
    scale: {
        max: 10,
        min: 0.1,
        step: 0.1,
        default: 1,
    },
    triggerEl: "img-zoom",
    dataset: "data-img-zoom",
    isClickViewImgClose: false,
});
```
也可以手动设置大图
```js
const iz = new ImgZoom();
iz.setImg(imgUrl)
```

