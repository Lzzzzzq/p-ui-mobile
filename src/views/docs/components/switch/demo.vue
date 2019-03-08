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
