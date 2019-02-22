<template>
  <NumWingBlank>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick">default</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" disabled>disabled</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" type="primary">primary</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" disabled type="primary">disabled primary</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline>default inline</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="primary">primary inline</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline size="small">default inline small</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="primary" size="small">primary inline small</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" size="small">default small</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" disabled size="small">disabled small</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" type="primary" size="small">primary small</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" disabled type="primary" size="small">disabled primary small</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" style="background-color: lightblue;">自定义样式</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" :activeFeedback="false">关闭反馈</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" icon="icon-pluscircle">带icon</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" icon="icon-left" inline>带icon inline</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" icon="icon-left" inline size="small">带icon inline small</NumButton>
    <div style="height: 20px;"></div>
  </NumWingBlank>
</template>

<script>
export default {
  name: 'ButtonDemo',
  methods: {
    handleClick: function () {
      console.log('click')
    }
  }
}
</script>
