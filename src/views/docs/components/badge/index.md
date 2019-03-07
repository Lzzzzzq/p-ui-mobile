# 徽标 Badge

徽标、标签，用于标注性提示。

## 代码演示
```javascript
// main.js

import { Badge } from 'news-ui-mobile'

Vue.use(Badge)
```

```html
<!-- *.vue -->

<template>
  <n-wing-blank>
    <n-white-space></n-white-space>
    <n-badge>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge size="small">1234</n-badge>
    &nbsp;&nbsp;
    <n-badge radiusCircle>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge size="small" radiusCircle>1234</n-badge>

    <n-white-space></n-white-space>
    <n-badge type="error">1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="error" size="small">1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="error" radiusCircle>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="error" size="small" radiusCircle>1234</n-badge>

    <n-white-space></n-white-space>
    <n-badge type="warning">1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="warning" size="small">1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="warning" radiusCircle>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="warning" size="small" radiusCircle>1234</n-badge>

    <n-white-space></n-white-space>
    <n-badge type="success">1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="success" size="small">1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="success" radiusCircle>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="success" size="small" radiusCircle>1234</n-badge>

    <n-white-space></n-white-space>
    <n-badge border>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge border size="small">1234</n-badge>
    &nbsp;&nbsp;
    <n-badge border radiusCircle>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge border size="small" radiusCircle>1234</n-badge>

    <n-white-space></n-white-space>
    <n-badge type="error" border>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="error" border size="small">1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="error" border radiusCircle>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="error" border size="small" radiusCircle>1234</n-badge>

    <n-white-space></n-white-space>
    <n-badge type="warning" border>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="warning" border size="small">1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="warning" border radiusCircle>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="warning" border size="small" radiusCircle>1234</n-badge>

    <n-white-space></n-white-space>
    <n-badge type="success" border>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="success" border size="small">1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="success" border radiusCircle>1234</n-badge>
    &nbsp;&nbsp;
    <n-badge type="success" border size="small" radiusCircle>1234</n-badge>

  </n-wing-blank>
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
| size | 徽标尺寸，值可为 normal、small | string | 'normal' |
| border | 边框类型的徽标 | boolean | false |
| radiusCircle | 圆角徽标 | boolean | false |
