<template>
  <p-wing-blank>
    <p-white-space></p-white-space>
    <p-button @click="handleToastInfo">普通弹框</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleToastInfoMask">带蒙层弹框，自定义高度</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleToastSuccess">成功弹框</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleToastError">失败弹框</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleToastHtml">自定义html弹框</p-button>
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
            <p-button type="primary">使用 jsx 语法</p-button>
          )
        },
        mask: true,
        jsx: true
      })
    }
  }
}
</script>
