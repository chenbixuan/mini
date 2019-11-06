<template>
  <div class="mine-content">
    <div class="mine-cont-memberBox">
      <!-- 未登录 -->
      <div class="memberBox-notlogin" v-if="false">
        <p class="memberBox-p1">沉壁轩｜灰姑娘<span>会员中心</span></p>
        <p class="memberBox-p2">加入会员 点亮特权</p>
      </div>
      <!-- 已登录 -->
      <div class="memberBox-logined">
        <p class="memberBox-p3">小轩<img @click="editClick()" src="/static/images/img26.png" /></p>
        <p class="memberBox-p4">立即领取20积分与全部会员权益</p>
        <p class="memberBox-p5">100<span>积分</span></p>
        <!-- <img class="memberBox-code" src="" /> -->
      </div>
      <div class="memberBox-item">
        <ul class="memberBox-ulBox">
          <li class="memberBox-ulBox-li">生日礼遇</li>
          <li class="memberBox-ulBox-li" @click="integralChange()">积分兑换</li>
          <li class="memberBox-ulBox-li">会员活动</li>
          <li class="memberBox-ulBox-li">专项服务</li>
        </ul>
      </div>
      
    </div>
    <div class="mine-cont-card">
      <ul class="mine-cont-cardUl">
        <li class="mine-cont-cardLi" @click="myOrder()"><img src="/static/images/img22.png"/>我的预约</li>
        <li class="mine-cont-cardLi" @click="myCard()"><img src="/static/images/img23.png"/>优惠卡券</li>
        <li class="mine-cont-cardLi"><img src="/static/images/img24.png"/>邀请好友</li>
        <li class="mine-cont-cardLi"><img src="/static/images/img25.png"/>联系客服</li>
      </ul>
    </div>
    <div class="mine-cont-item">
      <h2 class="item-title">至尊服务<span>SERVICE</span></h2>
      <ul class="item-ulBox">
        <li class="item-list">
          <div class="item-list-text">
            <h5>汉服体验</h5>
            <p>精致汉服绝美场景</p>
          </div>
          
        </li>
        <li class="item-list">
          <div class="item-list-text">
            <h5>汉服体验</h5>
            <p>精致汉服绝美场景</p>
          </div>
        </li>
        <li class="item-list">
          <div class="item-list-text">
            <h5>汉服体验</h5>
            <p>精致汉服绝美场景</p>
          </div>
        </li>
        <li class="item-list">
          <div class="item-list-text">
            <h5>汉服体验</h5>
            <p>精致汉服绝美场景</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    myOrder: function () {
      console.log('22')
      wx.navigateTo({
        url: '../mine/order/main'
      })
    },
    myCard: function () {
      wx.navigateTo({
        url: '../mine/coupon/main'
      })
    },
    integralChange: function () {
      wx.navigateTo({
        url: '../mine/integral/main'
      })
    },
    editClick: function () {
      wx.navigateTo({
        url: '../mine/personal/main'
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
