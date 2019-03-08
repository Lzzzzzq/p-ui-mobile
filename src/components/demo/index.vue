<template>
  <div class="demoWrap">
    <div class="pWrap">
      <div class="pControl">
        <div class="pControlL"></div>
        <div class="pControlR"></div>
      </div>
      <div class="pMain">
        <iframe :src="url" frameborder="0"></iframe>
      </div>
      <div class="pHome"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  props: {
    src: {
      type: String
    }
  },
  computed: {
    url: function () {
      return `//${window.location.host + window.location.pathname}#${this.src}`
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
