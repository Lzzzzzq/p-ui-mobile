# 气泡 Popover

在目标元素周围弹出气泡。

## 代码演示
```javascript
// main.js

import { Popover } from 'news-ui-mobile'

Vue.use(Popover)
```

```html
<!-- *.vue -->

<template>
  <n-wing-blank size="35%">
    <n-white-space size="70px"></n-white-space>
    <n-popover v-model="popA" @show="$toast.info('show')" @close="$toast.info('close')">
      <div slot="popover">
        <n-flex-wrap>
          <n-button type="text" style="color: white">复制</n-button>
          <n-button type="text" style="color: white">回复</n-button>
          <n-button type="text" style="color: white">举报</n-button>
        </n-flex-wrap>
      </div>
      <n-button inline @click="popA = !popA">顶部弹出</n-button>
    </n-popover>

    <n-white-space size="70px"></n-white-space>
    <n-popover placement="left" v-model="popB">
      <div slot="popover">
          <n-button type="text" style="color: white">复制</n-button>
          <n-button type="text" style="color: white">回复</n-button>
          <n-button type="text" style="color: white">举报</n-button>
      </div>
      <n-button inline @click="popB = !popB">左侧弹出</n-button>
    </n-popover>

    <n-white-space size="70px"></n-white-space>
    <n-popover placement="right" v-model="popC">
      <div slot="popover">
          <n-button type="text" style="color: white">复制</n-button>
          <n-button type="text" style="color: white">回复</n-button>
          <n-button type="text" style="color: white">举报</n-button>
      </div>
      <n-button inline @click="popC = !popC">右侧弹出</n-button>
    </n-popover>

    <n-white-space size="70px"></n-white-space>
    <n-popover placement="bottom" v-model="popD">
      <div slot="popover">
          <n-button type="text" style="color: white">复制</n-button>
          <n-button type="text" style="color: white">回复</n-button>
          <n-button type="text" style="color: white">举报</n-button>
      </div>
      <n-button inline @click="popD = !popD">底部弹出</n-button>
    </n-popover>

  </n-wing-blank>
</template>

<script>
export default {
  name: 'PopoverDemo',
  data () {
    return {
      popA: false,
      popB: false,
      popC: false,
      popD: false
    }
  }
}
</script>

```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placement | 弹出框的位置，可为 top、left、right、bottom | string | 'top' |
| v-model | 弹出框的显示状态 | boolean | false |

## 事件

| 事件名称 | 说明 |
| --- | --- |
| show | 展开后的回调 |
| close | 收起后的回调 |

## slot

弹出框内容需放在 slot 属性为 popover 的元素内
