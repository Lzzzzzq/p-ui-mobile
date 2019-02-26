# 两翼留白 WingBlank

布局组件，两翼留出一定空白。

## 代码演示
```javascript
// main.js

import { WingBlank } from 'news-ui-mobile'

Vue.use(WingBlank)
```

```html
<!-- *.vue -->

<template>
  <div>
    <NumWingBlank>
      <NumButton>默认边距16px</NumButton>
    </NumWingBlank>
    <NumWhiteSpace></NumWhiteSpace>
    <NumWingBlank size="30px">
      <NumButton>自定义 30px</NumButton>
    </NumWingBlank>
    <NumWhiteSpace></NumWhiteSpace>
    <NumWingBlank size="30%">
      <NumButton>自定义 30%</NumButton>
    </NumWingBlank>
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