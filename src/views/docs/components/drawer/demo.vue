<template>
  <div style="min-height: 100vh">
    <p-wing-blank>
      <p-white-space></p-white-space>
      <p-button @click="handleShowLeft">左侧</p-button>
      <p-white-space></p-white-space>
      <p-button @click="handleShowRight">右侧</p-button>
      <p-white-space></p-white-space>

      <p-drawer
        v-model="visible"
        :side="side"
        @show="handleShow"
        @hide="handleHide"
        distance="25%"
      >
        这是一个抽屉
      </p-drawer>

    </p-wing-blank>
  </div>
</template>

<script>
export default {
  name: 'DrawerDemo',
  data () {
    return {
      side: 'left',
      visible: false
    }
  },
  methods: {
    handleShowLeft: function () {
      this.side = 'left'
      this.visible = true
    },
    handleShowRight: function () {
      this.side = 'right'
      this.visible = true
    },
    handleShow: function () {
      this.$toast.info('显示抽屉')
    },
    handleHide: function () {
      this.$toast.info('隐藏抽屉')
    }
  }
}
</script>
