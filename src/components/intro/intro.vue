<template>
  <div class="wrap">

    <transition
      name="fade"
      enter-active-class="animated fadeIn"
    >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
