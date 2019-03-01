<template>
  <div style="min-height: 100vh">
    <n-wing-blank>
      <n-white-space></n-white-space>
      <n-button @click="handleShowLeft">左侧</n-button>
      <n-white-space></n-white-space>
      <n-button @click="handleShowRight">右侧</n-button>
      <n-white-space></n-white-space>

      <n-drawer
        v-model="visible"
        :side="side"
        @show="handleShow"
        @hide="handleHide"
        distance="25%"
      >
        这是一个抽屉
      </n-drawer>

    </n-wing-blank>
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
