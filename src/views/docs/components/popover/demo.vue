<template>
  <p-wing-blank size="35%">
    <p-white-space size="70px"></p-white-space>
    <p-popover v-model="popA" @show="$toast.info('show')" @close="$toast.info('close')">
      <div slot="popover">
        <p-flex-wrap>
          <p-button type="text" style="color: white">复制</p-button>
          <p-button type="text" style="color: white">回复</p-button>
          <p-button type="text" style="color: white">举报</p-button>
        </p-flex-wrap>
      </div>
      <p-button inline @click="popA = !popA">顶部弹出</p-button>
    </p-popover>

    <p-white-space size="70px"></p-white-space>
    <p-popover placement="left" v-model="popB">
      <div slot="popover">
          <p-button type="text" style="color: white">复制</p-button>
          <p-button type="text" style="color: white">回复</p-button>
          <p-button type="text" style="color: white">举报</p-button>
      </div>
      <p-button inline @click="popB = !popB">左侧弹出</p-button>
    </p-popover>

    <p-white-space size="70px"></p-white-space>
    <p-popover placement="right" v-model="popC">
      <div slot="popover">
          <p-button type="text" style="color: white">复制</p-button>
          <p-button type="text" style="color: white">回复</p-button>
          <p-button type="text" style="color: white">举报</p-button>
      </div>
      <p-button inline @click="popC = !popC">右侧弹出</p-button>
    </p-popover>

    <p-white-space size="70px"></p-white-space>
    <p-popover placement="bottom" v-model="popD">
      <div slot="popover">
          <p-button type="text" style="color: white">复制</p-button>
          <p-button type="text" style="color: white">回复</p-button>
          <p-button type="text" style="color: white">举报</p-button>
      </div>
      <p-button inline @click="popD = !popD">底部弹出</p-button>
    </p-popover>

  </p-wing-blank>
</template>

<script>
export default {
  name: 'PopoverDemo',
  data () {
    return {
      popA: false,
      popB: false,
      popC: false,
      popD: false
    }
  }
}
</script>
