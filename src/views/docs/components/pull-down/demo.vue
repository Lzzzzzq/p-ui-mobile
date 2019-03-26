<template>
  <p-pull-down
    :pullDown="true"
    @pullDown="handlePullDown"
    @pullStateChange="handleStateChange"
    ref="pullDown"
  >
    <div class="item">请使用手机访问</div>
    <div class="item">{{url}}</div>
    <div v-for="item in 20" :key="item" class="item" @click="handleClickItem">item{{item}}</div>
  </p-pull-down>
</template>

<script>
export default {
  name: 'PullDownDemo',
  data () {
    return {
      url: location.href
    }
  },
  methods: {
    handlePullDown: function ({ finish }) {
      setTimeout(() => {
        this.$refs.pullDown.loadFinish()
      }, 2000)
    },
    handleStateChange: function (newState) {
      console.log(newState)
    },
    handleClickItem: function () {
      console.log('handle click')
    }
  }
}
</script>
<style scoped>
.item {
  padding: 20px;
  background-color: lightgray;
  text-align: center;
}
</style>
