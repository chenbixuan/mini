<template>
  <div class="alertbox-content">
    <div class="mask-black" v-if="switchFlag" @click="closeWind()"></div>
    <div class="alertbox-cont-main" v-if="switchFlag" :animation='animationData'>
      <h2 class="alertbox-cont-title">预约信息确认<span><img src="/static/images/img19.png" @click="closeWind()" /></span></h2>
      <div class="alertbox-cont-text">
        <p><img src="../../../../static/images/img14.png" /><span class="sp1">主题摄影</span></p>
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
      fadeOutFlag: false,
      chooseSize: false,
      animationData: {}
      // fadeInUpFlag: false
      // fadeOutDownFlag: false
    }
  },
  computed: {
    switchFlag () {
      return this.$store.state.switchFlag
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
  // onUnload () {
  //   this.fadeInFlag = false
  //   this.fadeOutFlag = false
  // },
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
    // showshadow: function (data) {
    //   console.log(this.typeFlag)
    //   if (data) {
    //     console.log('1212121')
    //     this.chooseSezi()
    //   }
    // },
    closeWind: function () {
      this.$store.dispatch('setSwitchFlagState', false)
    },

    // 动画函数
    chooseSezi: function (e) {
      // 用that取代this，防止不必要的情况发生
      var that = this
      // 创建一个动画实例
      var animation = wx.createAnimation({
        // 动画持续时间
        duration: 500,
        // 定义动画效果，当前是匀速
        timingFunction: 'linear'
      })
      // 将该变量赋值给当前动画
      // that.animation = animation
      // 先在y轴偏移，然后用step()完成一个动画
      animation.translateY(200).step()
      // 用setData改变当前动画

      that.animationData = animation.export()
      // this.chooseSize = false

      setTimeout(function () {
        animation.translateY(0).step()
        that.animationData = animation.export()
        // that.clearcart = true
      }, 100)
    // }
      // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动 滑动时间
      // setTimeout(function () {
      //   animation.translateY(0).step()
      //   that.setData({
      //     animationData: animation.export(),
      //     clearcart: false
      //   })
      // }, 100)
    },
    // 隐藏
    hideModal: function (e) {
      var that = this
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear'
      })
      // that.animation = animation
      animation.translateY(700).step()
      that.animationData = animation.export()
      setTimeout(function () {
        animation.translateY(0).step()
        that.animationData = animation.export()
        that.switchFlag = false
      }, 500)
    }
  }
  // onShow () {
  //   this.chooseSize = false
  // }

}
</script>

<style>
.card {
  padding: 10px;
}
</style>
