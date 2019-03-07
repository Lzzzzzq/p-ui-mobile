<template>
  <p-wing-blank>
    <p-white-space></p-white-space>
    <p-button @click="handleShowModalBasic">基本</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleShowConfirm">confirm</p-button>
    <p-white-space></p-white-space>
    <p-button @click="handleShowHtml">html</p-button>
    <p-white-space></p-white-space>
  </p-wing-blank>
</template>

<script>
export default {
  name: 'ModalDemo',
  methods: {
    handleShowModalBasic: function () {
      this.$modal.basic({
        title: '提示',
        message: '你确定要删除该条数据吗？',
        onOk: () => {
          this.$toast.info('点击了确定')
        },
        onOpen: () => {
          this.$toast.info('modal 打开')
        },
        onClose: () => {
          this.$toast.info('modal 关闭')
        }
      })
    },
    handleShowConfirm: function () {
      this.$modal.confirm({
        title: '提示',
        message: '你确定要添加他为好友吗',
        onOk: () => {
          this.$toast.info('点击了确定')
        },
        onCancel: () => {
          return new Promise((resolve, reject) => {
            this.$toast.info('Promise: 点击了取消, 2s后消失')
            setTimeout(() => {
              resolve()
            }, 2000)
          })
        }
      })
    },
    handleClickBtn: function () {
      this.$toast.info('点击了 html 中 button')
    },
    handleShowHtml: function () {
      this.$modal.confirm({
        title: '自定义 dom',
        okText: 'Ok',
        cancelText: 'Cancel',
        domNode: (h) => (
          <p-button type="primary" on-click={this.handleClickBtn}>按钮</p-button>
        ),
        jsx: true,
        closeByTouchMask: false
      })
    }
  }
}
</script>
