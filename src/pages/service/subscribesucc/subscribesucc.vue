<template>
  <div class="subscribesucc-content">
    <div class="subscribesucc-cont-main">
      <div class="subscribesucc-cont-topBox">
        <div class="topBox-icon">
          <img src="/static/images/img21.png" />
          <p>预约成功</p>
        </div>
        <div class="topBox-text">
          <p>请按预约时间到店，我们将竭诚为你服务。</p>
          <p>如若行程有变，请及时取消预约</p>
        </div>
      </div>
      <div class="subscribesucc-cont-buttomBox">
        <p class="btn buttomBox-share">分享有礼</p>
        <p class="buttomBox-btn">
          <span>查看导航</span>
          <span @click="backHome()">回到首页</span>
        </p>
      </div>
    </div>

    <!-- <i-button @click="handleClick">默认按钮</i-button> -->

  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {
    backHome: function () {
      wx.switchTab({
        url: '/pages/index/main'
      })
    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
