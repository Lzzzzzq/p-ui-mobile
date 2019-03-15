<template>
  <div class="iconDocsWrap">
    <Md :mdData="mdData"></Md>
    <Icons :list="fontList"></Icons>
    <!-- <Demo src="/demo/toast"></Demo> -->
  </div>
</template>

<script>
import Md from '@vc/md'
// import Demo from '@vc/demo'
import mdData from './index.md'
import Icons from './icons'
import cont from './demo_index.html'

export default {
  components: {
    Icons,
    Md
    // Demo
  },
  data () {
    return {
      fontList: [],
      mdData
    }
  },
  mounted: function () {
    let div = document.createElement('div')
    div.innerHTML = cont
    let wrap = div.getElementsByClassName('symbol')[0]
    let fontClass = wrap.getElementsByClassName('code-name')
    fontClass = Array.prototype.slice.call(fontClass)
    let fontClassList = fontClass.map((item) => {
      return item.innerHTML.replace('#', '')
    })
    this.fontList = fontClassList
  }
}
</script>
<style lang="less">
.iconDocsWrap {
  box-sizing: border-box;
  flex-direction: column!important;
}
</style>
