<template>
  <p-wing-blank>
    <p-white-space></p-white-space>
    <p-button @click="handleToastInfo">弹个框</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleToastInfoMask">弹个带蒙层的框，自定义高度</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleToastSuccess">弹个成功框</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleToastError">弹个失败框</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleToastHtml">弹出html</p-button>
  </p-wing-blank>
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
      this.$toast.error('提交失败')
    },

    handleToastHtml: function () {
      this.$toast.info({
        domNode: (h) => {
          return (
            <div>
              <p-button type="primary" inline on-click={this.handleToastError}>
                这是一个 button
              </p-button>
            </div>
          )
        },
        mask: true,
        jsx: true
      })
    }
  }
}
</script>
