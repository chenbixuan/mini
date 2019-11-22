<template>
  <div class="integral-content">
    <div class="integral-cont-banner"> 
      <h2>积分 20</h2>
      <p>积分由门店消费，邀请好友，补全信息等方式获得</p>
    </div>
    <div class="integral-cont-item">
      <ul>
        <li class="integral-cont-list">
          <h3 class="title">10元汉服/变装优惠券</h3>
          <p class="p1">兑换说明：1000积分兑换，仅限本人使用，兑换后一个月有效，不与其他优惠券叠加</p>
          <p class="p-btn" @click="integralClick()">1000积分兑换</p>
        </li>
        <li class="integral-cont-list integral-cont-shortage">
          <h3 class="title">10元汉服/变装优惠券</h3>
          <p class="p1">兑换说明：1000积分兑换，仅限本人使用，兑换后一个月有效，不与其他优惠券叠加</p>
          <p class="p-btn p-shortage" @click="shortageClick()">1000积分兑换</p>
        </li>
         <li class="noOrder-list" v-if="false">
          <div class="noOrder-listDiv">
            <img src="/static/images/img44.png" />
            <p>老板补货中，敬请期待</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ticketType: 1

    }
  },
  created: function () {

  },
  methods: {
    integralClick: function () {
      mpvue.showModal({
        title: '提示',
        content: '是否确认使用1000积分兑换10元汉服/变装优惠券' })
    },
    shortageClick: function () {
      mpvue.showToast({
        title: '积分不足，兑换失败',
        icon: 'none'
      })
    }
  }
}
</script>


