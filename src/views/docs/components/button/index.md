# 按钮 Button

点击后会触发一个操作。

## 代码演示

```html
<!-- *.vue -->

<template>
  <p-wing-blank>
    <p-white-space></p-white-space>
    <div>size</div>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="primary">primary</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="primary" size="small" :activeStyle="false">primary small</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="primary" inline>primary</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="primary" size="small" inline>primary small</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="primary" size="small" icon="icon-pluscircleo" inline>按钮 primary small icon</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="info" inline>info</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="info" size="small" inline>info small</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="info" size="small" inline  icon="icon-pluscircleo">info small</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="text" inline>text</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="text" size="small" inline>text small</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="icon" inline  icon="icon-pluscircleo">icon</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="icon" size="small" inline  icon="icon-pluscircleo">icon small</p-button>
    <p-white-space></p-white-space>

    <p-white-space></p-white-space>
    <div>primary</div>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="primary">primary</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="primary" icon="icon-banckward">primary</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" disabled type="primary">disabled primary</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline type="primary">primary inline</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline disabled type="primary">primary inline disabled</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline type="primary" icon="icon-banckward">primary inline icon</p-button>
    <p-white-space></p-white-space>

    <div>default</div>
    <p-white-space></p-white-space>
    <p-button @click="handleClick">default</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" disabled>disabled</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline>default inline</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline disabled>default inline disabled</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline icon="icon-banckward">primary inline icon</p-button>
    <p-white-space></p-white-space>

    <div>info</div>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="info">info</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" disabled type="info">disabled info</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline type="info">info inline</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline disabled type="info">info inline disabled</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline icon="icon-banckward" type="info">info inline icon</p-button>
    <p-white-space></p-white-space>

    <div>text</div>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="text">text</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline type="text">text inline</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline type="text" disabled>text inline disabled</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline type="text" icon="icon-pluscircleo">添加</p-button>
    <p-white-space></p-white-space>

    <div>icon</div>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" type="icon" icon="icon-pluscircleo">icon</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline type="icon" disabled icon="icon-pluscircleo">添加</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleClick" inline type="icon" icon="icon-pluscircleo"></p-button>
    <p-white-space></p-white-space>

  </p-wing-blank>
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
| type | 按钮类型，可选值为 default、primary、info、text、icon | string | 'default' |
| size | 按钮尺寸，可选值为 normal、small | string | 'normal' |
| disabled | 设置禁用 | boolean | false |
| inline | 设置为行内 | boolean | false |
| icon | 设置带图标 | string |  |
| activeStyle | 点击反馈 | boolean | true |

## 事件

| 事件名称 | 说明 |
| --- | --- |
| click | 点击按钮时的回调 |
