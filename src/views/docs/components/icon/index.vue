<template>
  <div>
    <Icons :list="fontList"></Icons>
    <!-- <Md :mdData="mdData"></Md>
    <Demo src="/demo/toast"></Demo> -->
  </div>
</template>

<script>
// import Md from '@vc/md'
// import Demo from '@vc/demo'
// import mdData from './toast.md'
import Icons from './icons'
import cont from '@NewsUI/_util/iconfont/demo_fontclass.html'

export default {
  name: 'IconDocs',
  components: {
    Icons
    // Md,
    // Demo
  },
  data () {
    return {
      fontList: []
    }
  },
  mounted: function () {
    let div = document.createElement('div')
    div.innerHTML = cont
    let fontClass = div.getElementsByClassName('fontclass')
    fontClass = Array.prototype.slice.call(fontClass)
    let fontClassList = fontClass.map((item) => {
      return item.innerHTML.replace('.', '')
    })
    this.fontList = fontClassList
  }
}
</script>
