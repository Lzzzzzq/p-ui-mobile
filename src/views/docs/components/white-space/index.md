# 上下留白 WhiteSpace

布局组件，用于模块间距。

## 代码演示

```html
<!-- *.vue -->

<template>
  <p-wing-blank>
    <p-white-space></p-white-space>
    <p-button>默认距离 10px</p-button>
    <p-white-space size="30px"></p-white-space>
    <p-button>自定义距离 30px</p-button>
    <p-white-space size="60px"></p-white-space>
    <p-button>自定义距离 60px</p-button>
  </p-wing-blank>
</template>

<script>
export default {
  name: 'WhiteSpaceDemo'
}
</script>

```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 自定义距离 | string | '10px' |