<template>
  <div class="wrap">

    <transition
      name="fade"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="less" scoped>
@import './intro.less';
</style>
