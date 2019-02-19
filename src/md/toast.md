# Toast 轻提示

轻提示组件

```javascript
// main.js

import { Toast } from 'news-ui-mobile'

Vue.use(Toast)

// *.vue

this.$toast.info('Toast 轻提示')

this.$toast.info({
  msg: 'Toast 轻提示',
  mask: true,
  duration: 3000
})

this.$toast.success('提交成功')

this.$toast.error('提交失败')

```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| msg | 弹框文字 | string | '提示' |
| mask | 蒙层 | boolean | false |
| duration | 持续时间 | number | 2000 |
