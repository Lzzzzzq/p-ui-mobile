# 抽屉 Drawer

用于在屏幕边缘显示内容的面板。

## 代码演示

```javascript
// main.js

import { Drawer } from 'news-ui-mobile'

Vue.use(Drawer)
```

```html
<!-- *.vue -->

<template>
  <div style="min-height: 100vh">
    <num-wing-blank>
      <num-white-space></num-white-space>
      <num-button @click="handleShowLeft">左侧</num-button>
      <num-white-space></num-white-space>
      <num-button @click="handleShowRight">右侧</num-button>
      <num-white-space></num-white-space>
      <num-drawer
        v-model="visible"
        :side="side"
        distance="25%"
        @show="handleShow"
        @hide="handleHide"
      >
        这是一个抽屉
      </num-drawer>
    </num-wing-blank>
  </div>
</template>

<script>
export default {
  name: 'DrawerDemo',
  data () {
    return {
      side: 'left',
      visible: false
    }
  },
  methods: {
    handleShowLeft: function () {
      this.side = 'left'
      this.visible = true
    },
    handleShowRight: function () {
      this.side = 'right'
      this.visible = true
    },
    handleShow: function () {
      this.$toast.info('显示抽屉')
    },
    handleHide: function () {
      this.$toast.info('隐藏抽屉')
    }
  }
}
</script>


```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否打开抽屉 | Boolean | false |
| side | 抽屉的位置，可选 left、right | String | 'left' |
| distance | 抽屉距离边缘的距离 | String | '30%' |

## 事件

| 事件名称 | 说明 |
| --- | --- |
| show | 抽屉打开后 |
| hide | 抽屉收起后 |
