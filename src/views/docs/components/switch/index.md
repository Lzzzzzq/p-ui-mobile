# 开关 Switch

选择两个互斥对象。

## 代码演示

### 类型
```html
<p-switch></p-switch>
<p-switch type="success"></p-switch>
<p-switch type="error"></p-switch>
<p-switch type="warning"></p-switch>
```

### 不可选中
```html
<p-switch></p-switch>
<p-switch disabled></p-switch>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 开关状态 | boolean | false |
| disabled | 开关禁用 | boolean | false |
| type | 开关风格，值可为 primary、success、warning、error | string | 'primary' |

## 事件

| 事件名称 | 说明 |
| --- | --- |
| change | 切换状态后的回调，参数为切换后的状态 |
