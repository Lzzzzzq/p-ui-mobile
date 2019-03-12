# 徽标 Badge

徽标、标签，用于标注性提示。

## 代码演示

### 尺寸

```html
<p-badge>normal</p-badge>
<p-badge size="small">small</p-badge>
```

### 类型

```html
<p-badge>primary</p-badge>
<p-badge type="error">error</p-badge>
<p-badge type="warning">warning</p-badge>
<p-badge type="success">success</p-badge>
```

### 圆角

```html
<p-badge>normal</p-badge>
<p-badge radiusCircle>circle</p-badge>
```

### 带边框

```html
<p-badge>normal</p-badge>
<p-badge border>border</p-badge>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 徽标类型，值可为 primary、error、warning、success | string | 'primary' |
| size | 徽标尺寸，值可为 normal、small | string | 'normal' |
| border | 边框类型的徽标 | boolean | false |
| radiusCircle | 圆角徽标 | boolean | false |
