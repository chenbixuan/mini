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
      <h2 class="home-banner-title">至尊服务<span>SERVICE</span></h2>
      <div class="home-banner-twoCon">
        <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
          <block v-for="(item, index) in imgUrls" :key="index" >
            <swiper-item>
              <div class="home-two-text">
                <p class="detail">汉服体验</p>
                <p class="arrow-icon">精致汉服绝美场景</p>
              </div>
              <image :src="item" mode="scaleToFill"></image>
            </swiper-item>
          </block>
        </swiper>
      </div>
    </div>
    <div class="home-banner-three">
      <h2 class="home-banner-title">精选套餐<span>SELECTED</span></h2>
      <div class="home-banner-threeCon">
        <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
          <block v-for="(item, index) in imgUrls" :key="index" >
            <swiper-item>
              <!-- <div class="home-three-text">
                <img src="/static/images/home-line.png"/>
                <span class="sp-word">日出东南隅,照我秦氏楼</span>
              </div> -->
              <image :src="item" mode="scaleToFill"></image>
            </swiper-item>
          </block>
        </swiper>
      </div>
      
    </div>
    <div class="home-banner-four">
      <h2 class="home-banner-title">服务展示1</h2>
      <p class="home-banner-describe">描述描述</p>
      <div class="home-banner-fourCon">
        <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
          <block v-for="(item, index) in imgUrls" :key="index" >
            <swiper-item>
              <!-- <div class="home-three-text">
                <img src="/static/images/home-line.png"/>
                <span class="sp-word">日出东南隅,照我秦氏楼</span>
              </div> -->
              <image :src="item" mode="scaleToFill"></image>
            </swiper-item>
          </block>
        </swiper>
      </div>
      
    </div>
    
    
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
// import Axios from 'axios'
// import card from '@/components/card'
export default {
  components: {
    // card
  },

  data () {
    return {
      logs: [],
      imgUrls: [
        'https://chenbixuan.oss-cn-hangzhou.aliyuncs.com/test/1.jpg',
        'https://chenbixuan.oss-cn-hangzhou.aliyuncs.com/test/2.png',
        'https://chenbixuan.oss-cn-hangzhou.aliyuncs.com/test/3.jpeg'
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

    this.getHomePage()
  },
  methods: {
    getHomePage: function () {
      console.log('res')
      this.$axios.get('banner')
        .then(response => {
          console.log('111111')
          console.log(response)
          if (response.data.sucess) {
            console.log(response.data.data)
          }
        })
        .catch(error => {
          console.log(error)
          console.log(error.message)
        })
    }
  }
}
</script>

<style>

</style>
