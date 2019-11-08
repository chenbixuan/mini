<template>
  <div class="alertbox-content">
    <div class="mask-black " :class="{'fadeIn':fadeInFlag,'fadeOut':fadeOutFlag}"></div>
    <div class="alertbox-cont-main" :class="{'fadeInUp':fadeInFlag,'fadeOutDown':fadeOutFlag}">
      <h2 class="alertbox-cont-title">预约信息确认<span><img src="/static/images/img19.png" @click="closeWind()" /></span></h2>
      <div class="alertbox-cont-text">
        <p><img src="/static/images/img14.png" /><span class="sp1">主题摄影</span></p>
        <p><img src="/static/images/img15.png" /><span class="sp1">2019/10/27 13:00-14:00 到店</span></p>
        <p><img src="/static/images/img16.png" /><span class="sp1">沉壁轩汉服体验馆（街道口店）<span class="sp2">驾车：武汉市洪山区埠华大厦B座2712<br/>公交：地铁2号线街道口站C出口</span></span></p>
        <!-- <p><img src="/static/images/img17.png" />武汉市洪山区埠华大厦B座2712</p>
        <p><img src="/static/images/img18.png" />地铁2号线街道口站C出口</p> -->
      </div>
      <div class="btn alertbox-cont-btn" @click="alertOrder()">预约</div>
    </div>
  </div>
</template>

<script>
import EventBus from 'scripts/EventBus'
export default {
  data () {
    return {
      memberAgencyFrom: false,
      fadeInFlag: false,
      fadeOutFlag: false
      // fadeInUpFlag: false
      // fadeOutDownFlag: false
    }
  },
  created: function () {
    // this.fadeInFlag = false
  },
  mounted: function () {
    this.fadeInFlag = false
    this.fadeOutFlag = false
    EventBus.$on('GBKBalance', () => {
      this.ShowAgency()
    })
  },
  methods: {
    ShowAgency: function () {
      // this.memberAgencyFrom = true
      this.fadeInFlag = true
      this.fadeOutFlag = false
      // this.fadeInUpFlag = true
    }, // end ShowEditPhone
    alertOrder: function () {
      wx.navigateTo({
        url: '../subscribesucc/main'
      })
    },
    closeWind: function () {
      this.$nextTick(() => {
        this.fadeInFlag = false
        this.fadeOutFlag = true
      })
    }
  },
  beforeDestroy () {
    EventBus.$off('GBKBalance')
    this.fadeInFlag = false
    this.fadeOutFlag = false
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
