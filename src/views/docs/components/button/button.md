# 按钮 Button

点击后会触发一个操作。

## 代码演示

```javascript
// main.js

import { Button } from 'news-ui-mobile'

Vue.use(Button)
```

```html
<template>
  <NumWingBlank>
    <div style="height: 20px;"></div>
    <div>primary</div>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" type="primary">primary</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" type="primary" icon="icon-banckward">primary</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" disabled type="primary">disabled primary</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="primary">primary inline</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline disabled type="primary">primary inline disabled</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="primary" icon="icon-banckward">primary inline icon</NumButton>
    <div style="height: 20px;"></div>

    <div>default</div>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick">default</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" disabled>disabled</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline>default inline</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline disabled>default inline disabled</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline icon="icon-banckward">primary inline icon</NumButton>
    <div style="height: 20px;"></div>

    <div>info</div>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" type="info">info</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" disabled type="info">disabled info</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="info">info inline</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline disabled type="info">info inline disabled</NumButton>
    <div style="height: 20px;"></div>

    <div>text</div>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" type="text">text</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="text">text inline</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="text" icon="icon-pluscircleo">添加</NumButton>
    <div style="height: 20px;"></div>

  </NumWingBlank>
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
