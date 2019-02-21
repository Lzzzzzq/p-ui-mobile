<template>
  <div class="iconsWrap">
    <div class="iconWrap" v-for="(item, index) in list" :key="index">
      <div class="iconInner">
        <NumIcon :class="item"></NumIcon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconsDemo',
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style lang='less' scoped>
.iconsWrap {
  display: flex;
  flex-wrap: wrap;
  height: 100%;

  .iconWrap {
    @side: 80px;
    position: relative;
    // flex: 1;
    width: 10%;
    // height: @side;
    padding-bottom: 10%;

    .iconInner {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
}
</style>
