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
        title: '标题',
        message: '内容',
        onOk: () => {}
      })
    },
    handleShowConfirm: function () {
      this.$modal.confirm({
        title: '提示',
        message: '你确定要执行该操作吗',
        onOk: () => {},
        onCancel: () => {}
      })
    },
    handleShowHtml: function () {
      this.$modal.confirm({
        title: '标题',
        domNode: (h) => (
          <p-button>使用 jsx 语法</p-button>
        ),
        jsx: true
      })
    }
  }
}
</script>
