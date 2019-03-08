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

      <p-switch v-model="AActive" type="success" @change="handleChange"></p-switch>
      <p-switch v-model="BActive" type="success" @change="handleChange"></p-switch>
      <p-switch v-model="CActive" type="success" disabled @change="handleChange"></p-switch>
      <p-switch v-model="DActive" type="success" disabled @change="handleChange"></p-switch>

    </p-flex-wrap>

    <p-white-space></p-white-space>

    <p-flex-wrap>

      <p-switch v-model="AActive" type="error" @change="handleChange"></p-switch>
      <p-switch v-model="BActive" type="error" @change="handleChange"></p-switch>
      <p-switch v-model="CActive" type="error" disabled @change="handleChange"></p-switch>
      <p-switch v-model="DActive" type="error" disabled @change="handleChange"></p-switch>

    </p-flex-wrap>

    <p-white-space></p-white-space>

    <p-flex-wrap>

      <p-switch v-model="AActive" type="warning" @change="handleChange"></p-switch>
      <p-switch v-model="BActive" type="warning" @change="handleChange"></p-switch>
      <p-switch v-model="CActive" type="warning" disabled @change="handleChange"></p-switch>
      <p-switch v-model="DActive" type="warning" disabled @change="handleChange"></p-switch>

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
