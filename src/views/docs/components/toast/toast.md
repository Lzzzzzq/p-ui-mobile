# 轻提示 Toast

轻提示组件，入参可为字符串或对象。

## 代码演示
```javascript
// main.js

import { Toast } from 'news-ui-mobile'

Vue.use(Toast)
```

```html
<!-- *.vue -->

<template>
  <div class="demoWrap">
    <button @click="handleToastInfo">弹个框</button>
    <button @click="handleToastInfoMask">弹个带蒙层的框</button>
    <button @click="handleToastSuccess">弹个成功框</button>
    <button @click="handleToastError">弹个失败框</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleToastInfo: function () {
      this.$toast.info('Toast 轻提示')
    },

    handleToastInfoMask: function () {
      this.$toast.info({
        msg: 'Toast 轻提示',
        mask: true,
        duration: 1000,
        top: '10px',
        onClose: function () {
          console.log('close')
        }
      })
    },

    handleToastSuccess: function () {
      this.$toast.success('提交成功')
    },
    
    handleToastError: function () {
      this.$toast.error('提交成功')
    }
  }
}
</script>

```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| msg | 弹框文字 | string | '提示' |
| mask | 蒙层 | boolean | false |
| duration | 持续时间 | number | 2000 |
| top | 距离顶部位置 | string | 38% |
| onClose | 关闭后回调 | function | |
