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
    <NumWingBlank>默认边距16px</NumWingBlank>
    <NumWingBlank size="20px">自定义size 20px</NumWingBlank>
    <NumWingBlank size="10%">自定义size 10%</NumWingBlank>
  </div>
</template>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 自定义边距 | string | '16px' |