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
      <div class="pHome">
        <img src="../../assets/qrcode.png" class="pHomeIcon" alt="" @click.self="handleShowQrcode">
        <div class="qrCodeWrap" :class="{
          'qrCodeActive': qrcodeShow
        }">
          <img :src="qrcodeUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'Demo',
  props: {
    src: {
      type: String
    }
  },
  data () {
    return {
      qrcodeShow: false,
      qrcodeUrl: ''
    }
  },
  computed: {
    url: function () {
      return `${window.location.protocol}//${window.location.host + window.location.pathname}#${this.src}`
    }
  },
  mounted: function () {
    QRCode.toDataURL(this.url)
      .then(url => {
        this.qrcodeUrl = url
      })
      .catch(err => {
        console.error(err)
      })
  },
  methods: {
    handleShowQrcode: function () {
      this.qrcodeShow = !this.qrcodeShow
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
