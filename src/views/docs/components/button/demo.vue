<template>
  <NumWingBlank>
    <div style="height: 20px;"></div>
    <div>primary</div>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" type="primary">primary</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" type="primary" icon="icon-banckward">primary</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" disabled type="primary">disabled primary</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="primary">primary inline</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline disabled type="primary">primary inline disabled</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="primary" icon="icon-banckward">primary inline icon</NumButton>
    <div style="height: 20px;"></div>

    <div>default</div>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick">default</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" disabled>disabled</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline>default inline</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline disabled>default inline disabled</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline icon="icon-banckward">primary inline icon</NumButton>
    <div style="height: 20px;"></div>

    <div>info</div>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" type="info">info</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" disabled type="info">disabled info</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="info">info inline</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline disabled type="info">info inline disabled</NumButton>
    <div style="height: 20px;"></div>

    <div>text</div>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" type="text">text</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="text">text inline</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleClick" inline type="text" icon="icon-pluscircleo">添加</NumButton>
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
