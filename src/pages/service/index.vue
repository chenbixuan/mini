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
      <div class="service-cont-item">
        <p class="p-text"> 汉装/变装体验</p>
        <img class="p-img" src="/static/images/img7.png"/>
      </div>
      <div class="service-cont-item" @click="photoclick()">
        <p class="p-text"> 主题摄影(预约)</p>
        <img class="p-img" src="/static/images/img8.png"/>
      </div>
      <div class="service-cont-item">
        <p class="p-text"> 出街约拍(预约)</p>
        <img class="p-img" src="/static/images/img9.png"/>
      </div>
      <div class="service-cont-item">
        <p class="p-text"> 定制服务(咨询)</p>
        <img class="p-img" src="/static/images/img10.png"/>
      </div>
    </div>
    
    <photo-graphy v-if="false"></photo-graphy>
    <selection-time v-if="false"></selection-time>
    <subscribe-alert-box v-if="false"></subscribe-alert-box>
    <subscribe-succ v-if="false"></subscribe-succ>
    <my-order></my-order>
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
        '/static/images/img11.png',
        '/static/images/img9.png',
        '/static/images/img8.png'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      serviceHomeFlag: false
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

