<template>
  <div class="service-content">
    <div v-if="serviceHomeFlag">
      <div class="service-cont-banner">
        <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
          <block v-for="(item, index) in imgUrls" :key="index" >
            <swiper-item>
              <image :src="item" mode="scaleToFill"></image>
            </swiper-item>
          </block>
        </swiper>
      </div>
      <div class="service-cont-item" @click="maticPhotoclick()">
        <div class="service-item-text">
          <p class="p-text">汉装/变装体验</p>
          <p class="p-detail">精致汉服绝美场景</p>
        </div>
        <img class="p-img" src="https://chenbixuan.oss-cn-hangzhou.aliyuncs.com/test/img7.png"/>
      </div>
      <div class="service-cont-item" @click="maticPhotoclick()">
        <div class="service-item-text">
          <p class="p-text">主题摄影(预约)</p>
          <p class="p-detail">精致汉服绝美场景</p>
        </div>
        <img class="p-img" src="https://chenbixuan.oss-cn-hangzhou.aliyuncs.com/test/img8.png"/>
      </div>
      <div class="service-cont-item" @click="maticPhotoclick()">
        <div class="service-item-text">
          <p class="p-text">出街约拍(预约)</p>
          <p class="p-detail">精致汉服绝美场景</p>
        </div>
        <img class="p-img" src="https://chenbixuan.oss-cn-hangzhou.aliyuncs.com/test/img9.png"/>
      </div>
      <div class="service-cont-item">
        <div class="service-item-text">
          <p class="p-text">定制服务(咨询)</p>
          <p class="p-detail">精致汉服绝美场景</p>
        </div>
        <img class="p-img" src="https://chenbixuan.oss-cn-hangzhou.aliyuncs.com/test/img10.png"/>
      </div>
    </div>

    <!-- 服务说明 -->
    <!-- <photo-graphy v-if="graphyFlag"></photo-graphy> -->
    <!-- 预约时间 -->
    <!-- <selection-time v-if="false"></selection-time> -->
    <!-- 弹框 -->
    <!-- <subscribe-alert-box v-if="false"></subscribe-alert-box> -->
    <!-- 预约成功 -->
    <subscribe-succ v-if="false"></subscribe-succ>
    <!-- 我的预约 -->
    <my-order v-if="false"></my-order>
    <!-- 门店地址 -->
    <my-address v-if="false"></my-address>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import photoGraphy from '@/components/service/photography'
import selectionTime from '@/components/service/selectiontime'
import subscribeAlertBox from '@/components/service/subscribealertbox'
import subscribeSucc from '@/components/service/subscribesucc'
import myOrder from '@/components/service/order'
import myAddress from '@/components/service/address'
export default {
  data () {
    return {
      imgUrls: [
        'https://chenbixuan.oss-cn-hangzhou.aliyuncs.com/test/img11.png',
        'https://chenbixuan.oss-cn-hangzhou.aliyuncs.com/test/img9.png',
        'https://chenbixuan.oss-cn-hangzhou.aliyuncs.com/test/img8.png'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      serviceHomeFlag: true
    }
  },
  components: {
    photoGraphy,
    selectionTime,
    subscribeAlertBox,
    subscribeSucc,
    myOrder,
    myAddress
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    maticPhotoclick: function () {
      // wx.navigateTo({url: '../../components/service/photography.vue'})

      wx.navigateTo({
        url: '../service/graphy/main'
      })
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    photoclick: function () {
      this.serviceHomeFlag = false
    }
  }
}
</script>

