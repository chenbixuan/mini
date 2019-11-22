<template>
  <div class="order-content">
    <h3 class="order-cont-tab common-cont-tab">
      <span class="tab-sp" v-bind:class="{ 'on': status === 'WAITING'}" @click="orderState('WAITING')">未完成</span>
      <span class="tab-sp" v-bind:class="{ 'on': status === 'FINISHED'}" @click="orderState('FINISHED')">已完成</span>
    </h3>
    <div class="order-cont-item">
      <ul class="order-cont-itemUl">
        <li class="order-cont-list" v-for="item in lists" v-if="lists.length>0" :key="item.id">
          <h2 class="list-title">
            {{ type[item.type] }}<span class="list-text">预约号：{{ item.no }}</span>
            <span class="orderBtn" v-if="item.status === 'WAITING'" @click="cancel(item.id)">取消预约</span>
            <span class="orderText" v-if="item.status === 'FINISHED'">删除</span>
          </h2>
          <p class="list-time"><img src="/static/images/img42.png"/>{{ item.date }} {{ item.period }} 到店</p>
          <p class="list-address">
            <img class="list-address-icon" src="/static/images/img43.png"/>
            <span class="list-address-text">{{ item.shop.name }}（{{ item.shop.addr }}）<span class="sp1">{{ item.shop.addrJc }}</span></span>
            <span class="list-address-navigation"><img src="/static/images/img39.png"/></span>
          </p>
        </li>
        <li class="noOrder-list" v-if="lists.length==0">
          <div class="noOrder-listDiv">
            <img src="/static/images/img44.png" />
            <p>暂无预约单</p>
          </div>
        </li>
      </ul>
<!--      <ul class="order-cont-itemUl" v-if="status===2">-->

<!--        <li class="order-cont-list">-->
<!--          <h2 class="list-title">主题写真<span class="list-text">预约号：01010112</span><span class="orderText">已完成</span></h2>-->
<!--          <p class="list-time"><img src="/static/images/img22.png"/>2019/07/25 13:00-14:00 到店</p>-->
<!--          <p class="list-address">-->
<!--            <img class="list-address-icon" src="/static/images/img22.png"/>-->
<!--            <span class="list-address-text">沉壁轩汉服体验馆（街道口店）<span class="sp1">武汉市洪山区珞瑜路20号埠华大厦B座2712</span></span>-->
<!--            <span class="list-address-navigation"><img src="/static/images/img22.png"/></span>-->
<!--          </p>-->
<!--        </li>-->
<!--      </ul>-->
    </div>
  </div>
</template>

<script>
import { get, put } from '@/utils'
export default {
  data () {
    return {
      status: 'WAITING',
      page: 1,
      hasNext: false,
      lists: [],
      type: {
        'HFTY': '汉服/变装体验',
        'ZTSY': '主题摄影',
        'CJYP': '出街约拍',
        'DZFW': '定制服务'
      }
    }
  },
  created: function () {
  },
  mounted () {
    this.loadMore()
  },
  onReachBottom () {
    if (this.hasNext) this.loadMore()
  },
  methods: {
    cancel: function (id) {
      const that = this
      mpvue.showModal({
        title: '取消订单',
        content: '是否取消？',
        async success ({ confirm }) {
          if (confirm) {
            const res = await put(`/appointment/${id}`, { status: 'CANCELED' })
            if (!res.id) {
              mpvue.showToast({
                title: '取消异常',
                icon: 'none'
              })
            } else {
              // 重新渲染列表
              that.lists = that.lists.filter(item => item.id !== id)
              mpvue.showToast({
                title: '取消成功',
                icon: 'none'
              })
            }
          }
        }
      })
    },
    orderState: function (status) {
      this.status = status
      this.page = 1
      this.hasNext = false
      this.lists = []
      this.loadMore()
    },
    loadMore: async function () {
      const { lists, hasNext } = await get(`/appointment/my?status=${this.status}&page=${this.page}`)
      this.lists.push(...lists)
      this.hasNext = hasNext
      this.page++
    }
  }
}
</script>


