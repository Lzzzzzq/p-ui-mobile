<template>
  <div>
    <Md :mdData="mdData"></Md>
    <Demo src="/demo/action-sheet"></Demo>
  </div>
</template>

<script>
import Md from '@vc/md'
import Demo from '@vc/demo'
import mdData from './index.md'

export default {
  components: {
    Md,
    Demo
  },
  data () {
    return {
      mdData
    }
  }
}
</script>
