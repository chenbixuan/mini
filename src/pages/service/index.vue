<template>
  <div class="service-content">
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
    <div class="service-cont-item">
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
</template>

<script>
// Use Vuex
import store from './store'

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
      duration: 500
    }
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
    }
  }
}
</script>

