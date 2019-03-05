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
    <n-wing-blank>
      <n-button>默认边距16px</n-button>
    </n-wing-blank>
    <n-white-space></n-white-space>
    <n-wing-blank size="30px">
      <n-button>自定义 30px</n-button>
    </n-wing-blank>
    <n-white-space></n-white-space>
    <n-wing-blank size="30%">
      <n-button>自定义 30%</n-button>
    </n-wing-blank>
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