<template>
  <NumWingBlank>
    <div style="height: 20px;"></div>
    <NumButton @click="handleToastInfo" type="primary">弹个框</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleToastInfoMask" type="primary">弹个带蒙层的框，自定义高度</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleToastSuccess" type="primary">弹个成功框</NumButton>
    <div style="height: 20px;"></div>
    <NumButton @click="handleToastError" type="primary">弹个失败框</NumButton>
  </NumWingBlank>
</template>

<script>
export default {
  name: 'ToastDemo',
  methods: {
    handleToastInfo: function () {
      this.$toast.info('Toast 轻提示')
    },

    handleToastInfoMask: function () {
      this.$toast.info({
        msg: 'Toast 轻提示 带蒙层',
        mask: true,
        duration: 1000,
        top: '10px',
        onClose: function () {
          console.log('close')
        }
      })
    },

    handleToastSuccess: function () {
      this.$toast.success('提交成功')
    },

    handleToastError: function () {
      this.$toast.error('提交成功')
    }
  }
}
</script>
