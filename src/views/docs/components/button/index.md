# 按钮 Button

点击后会触发一个操作。

## 代码演示

```html
<!-- *.vue -->

<template>
  <n-wing-blank>
    <n-white-space></n-white-space>
    <div>size</div>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="primary">primary</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="primary" size="small" :activeStyle="false">primary small</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="primary" inline>primary</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="primary" size="small" inline>primary small</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="primary" size="small" icon="icon-pluscircleo" inline>按钮 primary small icon</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="info" inline>info</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="info" size="small" inline>info small</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="info" size="small" inline  icon="icon-pluscircleo">info small</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="text" inline>text</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="text" size="small" inline>text small</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="icon" inline  icon="icon-pluscircleo">icon</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="icon" size="small" inline  icon="icon-pluscircleo">icon small</n-button>
    <n-white-space></n-white-space>

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
    <n-button @click="handleClick" inline icon="icon-banckward" type="info">info inline icon</n-button>
    <n-white-space></n-white-space>

    <div>text</div>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="text">text</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline type="text">text inline</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline type="text" disabled>text inline disabled</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline type="text" icon="icon-pluscircleo">添加</n-button>
    <n-white-space></n-white-space>

    <div>icon</div>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" type="icon" icon="icon-pluscircleo">icon</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline type="icon" disabled icon="icon-pluscircleo">添加</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleClick" inline type="icon" icon="icon-pluscircleo"></n-button>
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
