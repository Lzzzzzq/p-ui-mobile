<template>
  <div class="numWingBlank" :style="{
    marginLeft: size,
    marginRight: size
  }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NumWingBlank',
  props: {
    size: {
      type: String,
      default: () => '16px'
    }
  }
}
</script>

<style lang="less" scoped>
.numWingBlank {

}
</style>
