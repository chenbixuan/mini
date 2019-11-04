<template>
  <div class="order-content">
    <h3 class="order-cont-tab common-cont-tab">
      <span class="tab-sp" v-bind:class="{ 'on': ModifyType === 1}" @click="orderState(1)">未完成</span>
      <span class="tab-sp" v-bind:class="{ 'on': ModifyType === 2}" @click="orderState(2)">已完成</span>
    </h3>
    <div class="order-cont-item">
      <ul class="order-cont-itemUl" v-if="ModifyType===1">
        <li class="order-cont-list">
          <h2 class="list-title">主题写真<span class="list-text">预约号：01010112</span><span class="orderBtn">取消预约</span></h2>
          <p class="list-time"><img src="/static/images/img22.png"/>2019/07/25 13:00-14:00 到店</p>
          <p class="list-address">
            <img class="list-address-icon" src="/static/images/img22.png"/>
            <span class="list-address-text">沉壁轩汉服体验馆（街道口店）<span class="sp1">武汉市洪山区珞瑜路20号埠华大厦B座2712</span></span>
            <span class="list-address-navigation"><img src="/static/images/img22.png"/></span>
          </p>
        </li>
      </ul>
      <ul class="order-cont-itemUl" v-if="ModifyType===2">
        
        <li class="order-cont-list">
          <h2 class="list-title">主题写真<span class="list-text">预约号：01010112</span><span class="orderText">已完成</span></h2>
          <p class="list-time"><img src="/static/images/img22.png"/>2019/07/25 13:00-14:00 到店</p>
          <p class="list-address">
            <img class="list-address-icon" src="/static/images/img22.png"/>
            <span class="list-address-text">沉壁轩汉服体验馆（街道口店）<span class="sp1">武汉市洪山区珞瑜路20号埠华大厦B座2712</span></span>
            <span class="list-address-navigation"><img src="/static/images/img22.png"/></span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ModifyType: 1
    }
  },
  created: function () {

  },
  methods: {
    orderState: function (no) {
      this.ModifyType = no
    }
  }
}
</script>


