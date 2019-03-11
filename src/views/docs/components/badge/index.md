# 徽标 Badge

徽标、标签，用于标注性提示。

## 代码演示

```html
<!-- *.vue -->

<template>
  <p-wing-blank>
    <p-white-space></p-white-space>
    <p-badge>1234</p-badge>
    &nbsp;&nbsp;
    <p-badge radiusCircle>1234</p-badge>
    &nbsp;&nbsp;

    <p-white-space></p-white-space>
    <p-badge type="error">1234</p-badge>
    &nbsp;&nbsp;
    <p-badge type="error" radiusCircle>1234</p-badge>
    &nbsp;&nbsp;

    <p-white-space></p-white-space>
    <p-badge type="warning">1234</p-badge>
    &nbsp;&nbsp;
    <p-badge type="warning" radiusCircle>1234</p-badge>
    &nbsp;&nbsp;

    <p-white-space></p-white-space>
    <p-badge type="success">1234</p-badge>
    &nbsp;&nbsp;
    <p-badge type="success" radiusCircle>1234</p-badge>
    &nbsp;&nbsp;

    <p-white-space></p-white-space>
    <p-badge border>1234</p-badge>
    &nbsp;&nbsp;
    <p-badge border radiusCircle>1234</p-badge>
    &nbsp;&nbsp;

    <p-white-space></p-white-space>
    <p-badge type="error" border>1234</p-badge>
    &nbsp;&nbsp;
    <p-badge type="error" border radiusCircle>1234</p-badge>
    &nbsp;&nbsp;

    <p-white-space></p-white-space>
    <p-badge type="warning" border>1234</p-badge>
    &nbsp;&nbsp;
    <p-badge type="warning" border radiusCircle>1234</p-badge>
    &nbsp;&nbsp;

    <p-white-space></p-white-space>
    <p-badge type="success" border>1234</p-badge>
    &nbsp;&nbsp;
    <p-badge type="success" border radiusCircle>1234</p-badge>
    &nbsp;&nbsp;

  </p-wing-blank>
</template>

<script>
export default {
  name: 'BadgeDemo'
}
</script>

```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 徽标类型，值可为 primary、error、warning、success | string | 'primary' |
| height | 徽标高度 | string | '24px' |
| border | 边框类型的徽标 | boolean | false |
| radiusCircle | 圆角徽标 | boolean | false |
