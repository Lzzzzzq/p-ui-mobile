# 对话框 Modal

用作显示重要信息，并请求用户反馈。

## 代码演示

### 默认样式

```js
this.$modal.basic({
  title: '标题',
  message: '内容',
  onOk: () => {}
})
```

### 询问框

```js
this.$modal.confirm({
  title: '提示',
  message: '你确定要执行该操作吗',
  onOk: () => {},
  onCancel: () => {}
})
```

### 自定义内容

```js
this.$modal.confirm({
  title: '标题',
  domNode: (h) => (
    <p-button>使用 jsx 语法</p-button>
  ),
  jsx: true
})
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
