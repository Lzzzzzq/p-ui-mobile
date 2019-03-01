<template>
  <n-wing-blank>
    <n-white-space></n-white-space>
    <n-button @click="handleToastInfo" type="primary">弹个框</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleToastInfoMask" type="primary">弹个带蒙层的框，自定义高度</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleToastSuccess" type="primary">弹个成功框</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleToastError" type="primary">弹个失败框</n-button>
    <n-white-space></n-white-space>
    <n-button @click="handleToastHtml" type="primary">弹出html</n-button>
  </n-wing-blank>
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
    },

    handleToastHtml: function () {
      this.$toast.info({
        msg: '<div class="hello"><img src="https://avatars1.githubusercontent.com/u/6128107?v=4" width="80px" height="80px" /><div>vue</div></div>',
        dangerouslyUseHTMLString: true
      })
    }
  }
}
</script>
