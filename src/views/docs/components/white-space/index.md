# 上下留白 WhiteSpace

布局组件，用于模块间距。

## 代码演示

```html
<!-- *.vue -->

<template>
  <n-wing-blank>
    <n-white-space></n-white-space>
    <n-button>默认距离 10px</n-button>
    <n-white-space size="30px"></n-white-space>
    <n-button>自定义距离 30px</n-button>
    <n-white-space size="60px"></n-white-space>
    <n-button>自定义距离 60px</n-button>
  </n-wing-blank>
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