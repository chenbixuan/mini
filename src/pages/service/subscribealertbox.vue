<template>
  <div class="alertbox-content">
    <div class="mask-black " :class="{'fadeIn':fadeInFlag,'fadeOut':fadeOutFlag}"></div>
    <div class="alertbox-cont-main" :class="{'fadeInUp':fadeInFlag,'fadeOutDown':fadeOutFlag}">
      <h2 class="alertbox-cont-title">预约信息确认<span><img src="/static/images/img19.png" @click="closeWind()" /></span></h2>
      <div class="alertbox-cont-text">
        <p><img src="/static/images/img14.png" /><span class="sp1">主题摄影</span></p>
        <p><img src="/static/images/img15.png" /><span class="sp1">{{ date }} {{ period }} 到店</span></p>
        <p><img src="/static/images/img16.png" /><span class="sp1">{{ shop.name }}（{{ shop.addr }}）<span class="sp2">驾车：{{ shop.addrJc}}<br/>公交：{{ shop.addrGj }}</span></span></p>
        <!-- <p><img src="/static/images/img17.png" />武汉市洪山区埠华大厦B座2712</p>
        <p><img src="/static/images/img18.png" />地铁2号线街道口站C出口</p> -->
      </div>
      <div class="btn alertbox-cont-btn" @click="alertOrder()">预约</div>
    </div>
  </div>
</template>

<script>
import { post } from '@/utils'
import EventBus from 'scripts/EventBus'
export default {
  data () {
    return {
      shop: {},
      date: '',
      period: '',
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
    EventBus.$on('GBKBalance', ({ shop, date, period }) => {
      this.ShowAgency()
      this.shop = shop[0]
      this.date = date
      this.period = period
    })
  },
  methods: {
    ShowAgency: function () {
      // this.memberAgencyFrom = true
      this.fadeInFlag = true
      this.fadeOutFlag = false
      // this.fadeInUpFlag = true
    }, // end ShowEditPhone
    alertOrder: async function () {
      const res = await post('/appointment', {
        type: 'ZTSY',
        date: this.date,
        period: this.period,
        shopId: this.shop.id
      })
      if (res.id) {
        mpvue.navigateTo({
          url: '../subscribesucc/main'
        })
      } else {
        mpvue.showToast({
          title: '预约失败',
          icon: 'none'
        })
      }
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
