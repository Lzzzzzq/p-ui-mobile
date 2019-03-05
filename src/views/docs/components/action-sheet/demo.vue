<template>
  <div style="min-height: 100vh">
    <n-wing-blank>
      <n-white-space></n-white-space>
      <n-button @click="actionSheetInit()">上拉action</n-button>
      <n-white-space></n-white-space>
      <n-button @click="nocancelAction()">不带cancel按钮action</n-button>
      <n-white-space></n-white-space>

      <n-action-sheet v-model="sheetVisible" :actions="actions" :cancelText="cancelText">
      </n-action-sheet>
    </n-wing-blank>
  </div>
</template>

<script>
export default {
  name: 'ActionSheetDemo',
  data () {
    return {
      actions: [
        {
          name: '拍照',
          method: (item, index) => {
            this.$toast.info('调用action:' + index + '===' + item.name)
          }
        },
        {
          name: '从相册中选择',
          method: (item, index) => {
            this.$toast.info('调用action:' + index + '===' + item.name)
          }
        },
        {
          name: '从网页中选择',
          method: (item, index) => {
            this.$toast.info('调用action:' + index + '===' + item.name)
          }
        }
      ],
      sheetVisible: false,
      cancelText: '取消'
    }
  },
  methods: {
    actionSheetInit () {
      this.sheetVisible = true
    },
    nocancelAction () {
      this.sheetVisible = true
      this.cancelText = ''
    }
  }
}
</script>
