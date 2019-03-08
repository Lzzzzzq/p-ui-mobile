# 操作表 ActionSheet

操作表，从屏幕下方移入。

## 代码演示

```html
<!-- *.vue -->

<template>
  <div style="min-height: 100vh">
    <p-wing-blank>
      <p-white-space></p-white-space>
      <p-button @click="actionSheetInit()">上拉action</p-button>
      <p-white-space></p-white-space>
      <p-button @click="nocancelAction()">不带cancel按钮action</p-button>
      <p-white-space></p-white-space>

      <p-action-sheet v-model="sheetVisible" :actions="actions" :cancelText="cancelText" @selected="handelSelect"></p-action-sheet>
    </p-wing-blank>
  </div>
</template>

<script>
export default {
  name: 'ActionSheetDemo',
  data () {
    return {
      actions: ['拍照', '从相册中选择', '从网页中选择'],
      sheetVisible: false,
      cancelText: '取消'
    }
  },
  methods: {
    actionSheetInit () {
      this.sheetVisible = true
      this.cancelText = '取消'
    },
    nocancelAction () {
      this.sheetVisible = true
      this.cancelText = ''
    },
    handelSelect (item, index) {
      this.$toast.info('item:' + item + '===index:' + index)
    }
  }
}
</script>

```

## API

| 属性 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| v-model | 是否打开操作表 | boolean | false |
| actions | actions 属性绑定一个操作数组 | array | ['拍照','从相册中选择','从网页中选择'] |
| cancelText | 底部取消按钮文案 | string  | 取消 |
| titleText | 顶部标题文案 | string  | 标题 |
| closeByTouchMask | 点击蒙层关闭 actionsheet | boolean | true |
