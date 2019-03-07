# 两翼留白 WingBlank

布局组件，两翼留出一定空白。

## 代码演示

```html
<!-- *.vue -->

<template>
  <div>
    <p-wing-blank>
      <p-button>默认边距16px</p-button>
    </p-wing-blank>
    <p-white-space></p-white-space>
    <p-wing-blank size="30px">
      <p-button>自定义 30px</p-button>
    </p-wing-blank>
    <p-white-space></p-white-space>
    <p-wing-blank size="30%">
      <p-button>自定义 30%</p-button>
    </p-wing-blank>
  </div>
</template>

<script>
export default {
  name: 'WingBlankDemo'
}
</script>

```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 自定义边距 | string | '16px' |
