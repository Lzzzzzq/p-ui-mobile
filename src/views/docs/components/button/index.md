# 按钮 Button

点击后会触发一个操作。

## 代码演示

```javascript
// main.js

import { Button } from 'news-ui-mobile'

Vue.use(Button)
```

```html
<!-- *.vue -->

<template>
  <n-wing-blank>
    <n-white-space></n-white-space>
    <div>primary</div>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="primary">primary</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="primary" icon="icon-banckward">primary</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" disabled type="primary">disabled primary</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline type="primary">primary inline</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline disabled type="primary">primary inline disabled</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline type="primary" icon="icon-banckward">primary inline icon</n-button>
    <n-white-space></n-white-space>

    <div>default</div>
    <n-white-space></n-white-space>
    <n-button @click="handleClick">default</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" disabled>disabled</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline>default inline</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline disabled>default inline disabled</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline icon="icon-banckward">primary inline icon</n-button>
    <n-white-space></n-white-space>

    <div>info</div>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="info">info</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" disabled type="info">disabled info</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline type="info">info inline</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline disabled type="info">info inline disabled</n-button>
    <n-white-space></n-white-space>

    <div>text</div>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="text">text</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline type="text">text inline</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline type="text" icon="icon-pluscircleo">添加</n-button>
    <n-white-space></n-white-space>

  </n-wing-blank>
</template>

<script>

export default {
  name: 'ButtonDemo',
  methods: {
    handleClick: function () {
      this.$toast.info('点击按钮')
    }
  }
}
</script>

```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型，可选值为 default、primary、info、text | string | 'default' |
| disabled | 设置禁用 | boolean | false |
| inline | 设置为行内 | boolean | false |
| icon | 设置带图标 | string |  |

## 事件

| 事件名称 | 说明 |
| --- | --- |
| click | 点击按钮时的回调 |
