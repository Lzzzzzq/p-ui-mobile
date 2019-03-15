<template>
  <div class="iconsWrap">
    <div class="iconWrap" v-for="(item, index) in list" :key="index">
      <div
        class="iconInner"
        :id="item"
        :data-clipboard-text="item"
        @click="handleClickIcon(item)"
      >
        <p-icon :type="item"></p-icon>
        <div class="iconName">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard'

export default {
  name: 'IconsDemo',
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    handleClickIcon: function (item) {
      // eslint-disable-next-line
      const clipboard = new ClipboardJS(`#${item}`)
      clipboard.on('success', (e) => {
        this.$toast.info({
          msg: '复制成功',
          top: '10px'
        })
        e.clearSelection()
        clipboard.destroy()
      })
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../../../assets/common.less';

.iconsWrap {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  // padding: 0 40px;
  box-sizing: border-box;

  .iconWrap {
    @side: 16.66%;
    position: relative;
    width: @side;
    padding-bottom: 100px;
    padding-top: 10px;
    box-sizing: border-box;

    .iconInner {
      position: absolute;
      width: 80%;
      height: 80%;
      left: 10%;
      top: 10%;
      display: flex;
      justify-content: center;
      text-align: justify;
      align-items: center;
      flex-direction: column;
      border-radius: @border-radius-base;

      color: @text-color-base;
      font-size: @font-size-base;
      font-family: @font-family-base;
      transition: all 0.3s;

      &:hover {
        background-color: @text-color-base;
        color: @text-color-white;
        cursor: pointer;
      }
      svg {
        font-size: 32px;
        margin: 12px 0 8px;
      }
    }
  }
}
</style>
