# 按钮 Button

点击后会触发一个操作。

## 代码演示

### 尺寸

```html
<p-button>default</p-button>
<p-button size="small">default small</p-button>
```

### 类型

```html
<p-button>default</p-button>
<p-button type="primary">primary</p-button>
<p-button type="info">info</p-button>
<p-button type="text">text</p-button>
<p-button type="icon" icon="icon-pluscircleo">icon</p-button>
```

### 行内

```html
<p-button inline>default inline</p-button>
<p-button size="small" inline>default small inline</p-button>
```

### 带图标

```html
<p-button icon="icon-pluscircleo" inline>icon</p-button>
<p-button size="small" icon="icon-pluscircleo" inline>icon</p-button>
```

### 不可点击

```html
<p-button disabled>default disabled</p-button>
<p-button type="primary" disabled>primary disabled</p-button>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型，可选值为 default、primary、info、text、icon | string | 'default' |
| size | 按钮尺寸，可选值为 normal、small | string | 'normal' |
| disabled | 设置禁用 | boolean | false |
| inline | 设置为行内 | boolean | false |
| icon | 设置带图标 | string |  |
| activeStyle | 点击反馈 | boolean | true |

## 事件

| 事件名称 | 说明 |
| --- | --- |
| click | 点击按钮时的回调 |
