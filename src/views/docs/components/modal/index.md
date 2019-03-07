# 对话框 Modal

用作显示重要信息，并请求用户反馈。

## 代码演示

```html
<!-- *.vue -->

<template>
  <p-wing-blank>
    <p-white-space></p-white-space>
    <p-button @click="handleShowModalBasic">基本</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleShowConfirm">confirm</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleShowHtml">html</p-button>
    <p-white-space></p-white-space>
  </p-wing-blank>
</template>

<script>
export default {
  name: 'ModalDemo',
  methods: {
    handleShowModalBasic: function () {
      this.$modal.basic({
        title: '提示',
        message: '你确定要删除该条数据吗？',
        onOk: () => {
          this.$toast.info('点击了确定')
        },
        onOpen: () => {
          this.$toast.info('modal 打开')
        },
        onClose: () => {
          this.$toast.info('modal 关闭')
        }
      })
    },
    handleShowConfirm: function () {
      this.$modal.confirm({
        title: '提示',
        message: '你确定要添加他为好友吗',
        onOk: () => {
          this.$toast.info('点击了确定')
        },
        onCancel: () => {
          return new Promise((resolve, reject) => {
            this.$toast.info('Promise: 点击了取消, 2s后消失')
            setTimeout(() => {
              resolve()
            }, 2000)
          })
        }
      })
    },
    handleClickBtn: function () {
      this.$toast.info('点击了 html 中 button')
    },
    handleShowHtml: function () {
      this.$modal.confirm({
        title: '自定义 dom',
        okText: 'Ok',
        cancelText: 'Cancel',
        domNode: (h) => (
          <p-button type="primary" on-click={this.handleClickBtn}>按钮</p-button>
        ),
        jsx: true,
        closeByTouchMask: false
      })
    }
  }
}
</script>

```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | string | '标题' |
| message | 内容 | string | '内容' |
| okText | 确定按钮的文本 | string | '确定' |
| cancelText | 取消按钮的文本 | string | '取消' |
| onOpen | 打开后回调 | function | |
| onClose | 关闭后回调 | function | |
| onOk | 确定后回调，可为 Promise | function | |
| onCancel | 取消后回调，可为 Promise | function | |
| jsx | 开启渲染 jsx | boolean | false |
| domNode | 返回一个 jsx 对象，**注意入参 h** | jsx |
| closeByTouchMask | 是否可以通过点击蒙层关闭对话框 | boolean | true |
