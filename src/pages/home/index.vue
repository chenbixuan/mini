<template>
  <div class="home-content">
    <div class="home-banner-one">
      <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
        <block v-for="(item, index) in imgUrls" :key="index" >
          <swiper-item>
            <image :src="item" mode="scaleToFill"></image>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="home-banner-two">
      <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
        <block v-for="(item, index) in imgUrls" :key="index" >
          <swiper-item>
            <div class="home-two-text">
              <p class="detail">查看详情</p>
              <p class="arrow-icon"><img src="/static/images/home-detail.png"/></p>
            </div>
            <image :src="item" mode="scaleToFill"></image>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="home-banner-three">
      <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
        <block v-for="(item, index) in imgUrls" :key="index" >
          <swiper-item>
            <div class="home-three-text">
              <img src="/static/images/home-line.png"/>
              <span class="sp-word">日出东南隅,照我秦氏楼</span>
            </div>
            <image :src="item" mode="scaleToFill"></image>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="home-banner-three three-theight">
      <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
        <block v-for="(item, index) in imgUrls" :key="index" >
          <swiper-item>
            <div class="home-three-text">
              <img src="/static/images/home-line.png"/>
              <span class="sp-word">日出东南隅,照我秦氏楼</span>
            </div>
            <image :src="item" mode="scaleToFill"></image>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="home-block-address">
      <p class="home-addree-img"><img src="/static/images/home-address.png"/></p>
      <div class="home-addree-text">
        <h2 class="title">
          沉壁轩<span>汉服体验馆（武汉街道口）</span>
        </h2>
        <p class="p-word"><img src="/static/images/icon1.png"/>营业时间：11:00-20:30</p>
        <p class="p-word"><img src="/static/images/icon2.png"/>武汉市洪山区埠华大厦B座2712</p>
        <p class="p-word"><img src="/static/images/icon3.png"/>13164100072</p>
      </div>
    </div>
    <div class="home-block-address">
      <p class="home-addree-img"><img src="/static/images/home-address.png"/></p>
      <div class="home-addree-text">
        <h2 class="title">
          灰姑娘<span>变装体验馆（武汉街道口）</span>
        </h2>
        <p class="p-word"><img src="/static/images/icon1.png"/>营业时间：11:00-20:30</p>
        <p class="p-word"><img src="/static/images/icon2.png"/>武汉市洪山区埠华大厦B座2712</p>
        <p class="p-word"><img src="/static/images/icon3.png"/>13164100072</p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
// import card from '@/components/card'

export default {
  components: {
    // card
  },

  data () {
    return {
      logs: [],
      imgUrls: [
        '/static/images/1.jpg',
        '/static/images/2.png',
        '/static/images/3.jpeg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
    }
  },

  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>

</style>
