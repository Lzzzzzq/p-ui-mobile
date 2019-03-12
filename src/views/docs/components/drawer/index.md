# 抽屉 Drawer

用于在屏幕边缘显示内容的面板。

## 代码演示

```html
<p-drawer
  v-model="visible"
  :side="side"
  @show="handleShow"
  @hide="handleHide"
  distance="25%"
>
  抽屉
</p-drawer>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否打开抽屉 | boolean | false |
| side | 抽屉的位置，可选 left、right | string | 'left' |
| distance | 抽屉距离边缘的距离 | string | '30%' |
| closeByTouchMask | 是否可以通过点击蒙层收起抽屉 | boolean | true |

## 事件

| 事件名称 | 说明 |
| --- | --- |
| show | 抽屉打开后 |
| hide | 抽屉收起后 |
