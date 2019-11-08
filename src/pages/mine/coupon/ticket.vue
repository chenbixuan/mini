<template>
  <div class="ticket-content">
    <h3 class="ticket-cont-tab common-cont-tab">
      <span class="tab-sp" v-bind:class="{ 'on': status === 'UNUSED' }" @click="changeTab('UNUSED')">未使用</span>
      <span class="tab-sp" v-bind:class="{ 'on': status === 'USED' }" @click="changeTab('USED')">使用记录</span>
      <span class="tab-sp" v-bind:class="{ 'on': status === 'OUT' }" @click="changeTab('OUT')">已过期</span>
    </h3>
    <div class="ticket-cont-item">
      <ul class="ticket-cont-itemUl">
        <li class="ticket-cont-list" v-for="item in lists" :key="item.id">
          <div class="list-cardBox">
            <div class="list-cardBox-fl" :class="{ 'apply-cardBox': status !== 'UNUSED' }">
              <p class="money"><span>¥</span>{{ item.value }}</p>
              <p class="money-text">{{ type[item.type] }}</p>
            </div>
            <div class="list-cardBox-ct">
              <h2 class="title">{{ item.name }}</h2>
              <p class="p1">{{ item.createdAt }}-{{ item.expire }}</p>
              <p class="p1">{{ userLimit[item.userLimit] }}可用</p>
            </div>
            <div class="list-cardBox-btn" :class="{ 'apply-cardBtn': status !== 'UNUSED' }">
              {{ st[item.status] }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  import { get } from '../../../utils'

  export default {
    data: {
      status: 'UNUSED',
      lists: [],
      hasNext: true,
      page: 1,
      userLimit: {
        'NEW': '新用户',
        'OLD': '老用户',
        'NONE': '不限制'
      },
      type: {
        'CASH': '现金券'
      },
      st: {
        'UNUSED': '立即使用',
        'USED': '已使用',
        'OUT': '已过期'
      }
    },
    created: function () {
    },
    mounted: function () {
      this.loadMore()
    },
    onReachBottom () {
      if (this.hasNext) this.loadMore()
    },
    methods: {
      changeTab: function (status) {
        this.status = status
        this.lists = []
        this.page = 1
        this.hasNext = true

        this.loadMore()
      },
      loadMore: async function () {
        const { lists, hasNext } = await get(`/userCard?status=${this.status}&page=${this.page}`)
        lists.map(item => {
          item.expire = moment(item.expire).format('YYYY.MM.DD')
          item.createdAt = moment(item.createdAt).format('YYYY.MM.DD')
          this.lists.push(item)
        })
        this.hasNext = hasNext
        this.page++
      }
    }
  }
</script>
