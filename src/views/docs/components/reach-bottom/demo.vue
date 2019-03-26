<template>
  <div class="wrap">
    <div v-for="item in listNum" :key="item" class="item">item{{item}}</div>
    <p-reach-bottom
      @reachBottom="handleLoadMore"
      ref="loadmore"
      :preloadDistance="0"
      @reachStateChange="handleChangeState"
      immediate
    >
    </p-reach-bottom>
  </div>
</template>

<script>
export default {
  name: 'ReachBottomDemo',
  data () {
    return {
      listNum: 20
    }
  },
  methods: {
    handleLoadMore: function ({ finish }) {
      setTimeout(() => {
        this.$refs.loadmore.loadFinish()
        this.listNum += 20
        if (this.listNum === 60) {
          this.$refs.loadmore.loadNomore()
        }
      }, 1000)
    },
    handleChangeState: function (newState) {
      console.log(newState)
    }
  }
}
</script>
<style scoped>
.item {
  padding: 20px;
  text-align: center;
  background-color: lightgray;
}
</style>
