<template>
  <div class="demoWrap">
    <button @click="handleToastInfo">弹个框</button>
    <button @click="handleToastInfoMask">弹个带蒙层的框</button>
    <button @click="handleToastSuccess">弹个成功框</button>
    <button @click="handleToastError">弹个失败框</button>
  </div>
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
