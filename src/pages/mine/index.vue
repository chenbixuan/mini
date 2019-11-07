<template>
  <div class="mine-content">
    <div class="mine-cont-memberBox">
      <!-- 未登录 -->
      <div class="memberBox-notlogin" v-if="!token">
        <p class="memberBox-p1">沉壁轩｜灰姑娘<span>会员中心</span></p>
<!--        <p class="memberBox-p2">加入会员 点亮特权</p>-->
        <button
          class="memberBox-p2"
          open-type="getUserInfo"
          @getuserinfo="getUserInfo"
        >
          加入会员 点亮特权
        </button>
      </div>
      <!-- 已登录 -->
      <div class="memberBox-logined" v-if="token">
        <p class="memberBox-p3">{{ userInfo.nickname || '-' }}<img @click="editClick()" src="/static/images/img26.png" /></p>
        <p class="memberBox-p4">立即领取20积分与全部会员权益</p>
        <p class="memberBox-p5" @click="getUserInfo()">{{ userInfo.jf }}<span>积分</span></p>
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
        <li class="mine-cont-cardLi" @click="contact()"><img src="/static/images/img25.png"/>联系客服</li>
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
import { get, post } from '../../utils'

export default {
  props: ['text'],
  data: {
    token: null,
    openId: null,
    userInfo: {}
  },
  mounted () {
    this.openId = this.$store.state.openId
    if (!this.openId) {
      this.getOpenId()
    } else {
      this.fetchWxUser({ openId: this.openId })
    }
  },
  methods: {
    myOrder: function () {
      mpvue.navigateTo({
        url: '../mine/order/main'
      })
    },
    myCard: function () {
      mpvue.navigateTo({
        url: '../mine/coupon/main'
      })
    },
    integralChange: function () {
      mpvue.navigateTo({
        url: '../mine/integral/main'
      })
    },
    editClick: function () {
      mpvue.navigateTo({
        url: '../mine/personal/main'
      })
    },
    getOpenId: function () {
      const that = this
      mpvue.login({
        async success (res) {
          if (res.code) {
            // 拿code去后台兑换openId
            const { openId } = await get(`/wxUser/getOpenId?code=${res.code}`)
            mpvue.setStorageSync('openId', openId)
            that.$store.state.openId = openId
            that.openId = openId
          } else {
            mpvue.showToast({
              title: '登录异常',
              icon: 'none'
            })
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    },
    // 获取微信信息
    getUserInfo: async function (e) {
      const userInfo = e.target.userInfo
      userInfo.openId = this.openId
      userInfo.nickname = userInfo.nickName

      this.fetchWxUser(userInfo)
    },
    // 拿微信信息去后台注册
    fetchWxUser: async function (userInfo) {
      try {
        const { token, wxUser } = await post('/wxUser', userInfo)
        mpvue.setStorageSync('token', token)
        this.$store.state.token = token
        this.token = token
        this.userInfo = wxUser
      } catch (e) {
        mpvue.showToast({
          title: '授权异常',
          icon: 'none'
        })
        console.log('e-->', e)
      }
    },
    contact: function () {
      mpvue.showToast({
        title: '不理你，哈哈!',
        icon: 'none'
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
