<template>
  <div>
    <Md :mdData="mdData"></Md>
  </div>
</template>

<script>
import Md from '@vc/md'
import mdData from './index.md'

export default {
  components: {
    Md
  },
  data () {
    return {
      mdData
    }
  }
}
</script>
