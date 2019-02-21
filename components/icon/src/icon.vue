<template>
  <i class="icon anticon" :class="{
    [type]: true
  }"></i>
</template>

<script>
export default {
  name: 'NumIcon',
  props: {
    type: {
      type: String,
      default: () => ('')
    }
  }
}
</script>

<style lang="less">
@import '../../_util/iconfont/iconfont.css';
</style>
