<template>
  <div class="home-content">
    <div class="home-banner-one">
      <swiper v-if="banner.length > 0" indidator-dots="banner.length > 1">
        <block v-for="(item, index) in banner" :key="index" >
          <swiper-item>
            <image :src="item.file.url" mode="scaleToFill"></image>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="home-banner-two">
      <h2 class="home-banner-title">至尊服务<span>SERVICE</span></h2>
      <div class="home-banner-twoCon">
        <swiper v-if="service.length > 0" indidator-dots="imgUservicerls.length > 1">
          <block v-for="(item, index) in service" :key="index" >
            <swiper-item @click="commonClick()">
              <div class="home-two-text">
                <p class="detail">汉服体验</p>
                <p class="arrow-icon">精致汉服绝美场景</p>
              </div>
              <image :src="item.file.url" mode="scaleToFill"></image>
            </swiper-item>
          </block>
        </swiper>
      </div>
    </div>
    <div class="home-banner-three">
      <h2 class="home-banner-title">精选套餐<span>SELECTED</span></h2>
      <div class="home-banner-threeCon">
        <swiper v-if="service1.length > 0" indidator-dots="service1.length > 1">
          <block v-for="(item, index) in service1" :key="index" >
            <swiper-item @click="commonClick()">
              <image :src="item.file.url" mode="scaleToFill"></image>
            </swiper-item>
          </block>
        </swiper>
      </div>

    </div>
    <div class="home-banner-four">
      <h2 class="home-banner-title">服务展示1</h2>
      <p class="home-banner-describe">描述描述</p>
      <div class="home-banner-fourCon">
        <swiper v-if="service2.length > 0" indidator-dots="service2.length > 1">
          <block v-for="(item, index) in service2" :key="index" >
            <swiper-item>
              <image :src="item.file.url" mode="scaleToFill"></image>
            </swiper-item>
          </block>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '../../utils'
export default {
  components: {
  },

  data () {
    return {
      banner: [],
      service: [],
      service1: [],
      service2: [],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
    }
  },

  mounted () {
    this.getHomePage()
  },

  methods: {
    async getHomePage () {
      const banner = await get(`/banner?enable=true`)
      this.banner = banner['INDEX']
      this.service = banner['INDEX_SERVICE']
      this.service1 = banner['SERVICE1']
      this.service2 = banner['SERVICE2']
    },
    commonClick: function () {
      wx.navigateTo({
        url: '../newDetail/news/main'
      })
    }
  }
}
</script>

<style>

</style>
