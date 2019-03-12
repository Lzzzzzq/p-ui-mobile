# 气泡 Popover

在目标元素周围弹出气泡。

## 代码演示

### 底部弹出

```html
<p-popover v-model="popA" placement="bottom">
  <div slot="popover">
    <p-button type="text" style="color: white">A</p-button>
    <p-button type="text" style="color: white">B</p-button>
    <p-button type="text" style="color: white">C</p-button>
  </div>
  <p-button inline @click="popA = !popA">顶部弹出</p-button>
</p-popover>
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
