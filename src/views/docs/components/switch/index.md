# 开关 Switch

选择两个互斥对象。

## 代码演示
```html
<!-- *.vue -->

<template>
  <p-wing-blank>
    <p-white-space></p-white-space>
    <p-flex-wrap>

      <p-switch v-model="AActive" @change="handleChange"></p-switch>
      <p-switch v-model="BActive" @change="handleChange"></p-switch>
      <p-switch v-model="CActive" disabled @change="handleChange"></p-switch>
      <p-switch v-model="DActive" disabled @change="handleChange"></p-switch>

    </p-flex-wrap>

    <p-white-space></p-white-space>

    <p-flex-wrap>

      <p-switch v-model="AActive" type="success"></p-switch>
      <p-switch v-model="BActive" type="success"></p-switch>
      <p-switch v-model="CActive" type="success" disabled></p-switch>
      <p-switch v-model="DActive" type="success" disabled></p-switch>

    </p-flex-wrap>

    <p-white-space></p-white-space>

    <p-flex-wrap>

      <p-switch v-model="AActive" type="error"></p-switch>
      <p-switch v-model="BActive" type="error"></p-switch>
      <p-switch v-model="CActive" type="error" disabled></p-switch>
      <p-switch v-model="DActive" type="error" disabled></p-switch>

    </p-flex-wrap>

    <p-white-space></p-white-space>

    <p-flex-wrap>

      <p-switch v-model="AActive" type="warning"></p-switch>
      <p-switch v-model="BActive" type="warning"></p-switch>
      <p-switch v-model="CActive" type="warning" disabled></p-switch>
      <p-switch v-model="DActive" type="warning" disabled></p-switch>

    </p-flex-wrap>
  </p-wing-blank>
</template>

<script>
export default {
  name: 'SwitchDemo',
  data () {
    return {
      AActive: true,
      BActive: false,
      CActive: true,
      DActive: false
    }
  },
  methods: {
    handleChange: function (state) {
      this.$toast.info(state ? '打开' : '关闭')
    }
  }
}
</script>

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
