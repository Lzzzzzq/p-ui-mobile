# 轻提示 Toast

轻提示组件，入参可为字符串或对象。

## 代码演示

### 类型

```js
this.$toast.info('普通')
this.$toast.success('成功')
this.$toast.error('失败')
```

### 常用配置

```js
this.$toast.info({
  msg: '弹框',
  mask: true,
  duration: 1000,
  top: '10px',
  onClose: function () {
    console.log('close')
  }
})
```

### 自定义内容

```js
this.$toast.info({
  domNode: (h) => {
    return (
      <p-button type="primary">使用 jsx 语法</p-button>
    )
  },
  jsx: true
})
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| msg | 弹框文字 | string | '提示' |
| mask | 蒙层 | boolean | false |
| duration | 持续时间 | number | 2000 |
| top | 距离顶部位置 | string | '38%' |
| onClose | 关闭后回调 | function | |
| jsx | 开启渲染 jsx | boolean | false |
| domNode | 返回一个 jsx 对象，**注意入参 h** | jsx |
