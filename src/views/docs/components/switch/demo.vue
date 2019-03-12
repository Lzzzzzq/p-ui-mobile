<template>
  <p-wing-blank>
    <p-white-space></p-white-space>
    <div>类型</div>
    <p-white-space></p-white-space>

    <p-flex-wrap>
      <p-switch :value="true"></p-switch>
      <p-switch :value="true" type="success"></p-switch>
      <p-switch :value="true" type="error"></p-switch>
      <p-switch :value="true" type="warning"></p-switch>
    </p-flex-wrap>

    <p-white-space></p-white-space>
    <div>不可选中</div>
    <p-white-space></p-white-space>

    <p-flex-wrap>

      <p-switch :value="true"></p-switch>
      <p-switch :value="true" disabled></p-switch>

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
