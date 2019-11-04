<template>
  <div class="ticket-content">
    <h3 class="ticket-cont-tab common-cont-tab">
      <span class="tab-sp" v-bind:class="{ 'on': ticketType === 1}" @click="ticketState(1)">未使用</span>
      <span class="tab-sp" v-bind:class="{ 'on': ticketType === 2}" @click="ticketState(2)">使用记录</span>
      <span class="tab-sp" v-bind:class="{ 'on': ticketType === 3}" @click="ticketState(3)">已过期</span>
    </h3>
    <div class="ticket-cont-item">
      <ul class="ticket-cont-itemUl" v-if="ticketType===1">
        <li class="ticket-cont-list">
          <div class="list-cardBox">
            <div class="list-cardBox-fl">
              <p class="money"><span>¥</span>5</p>
              <p class="money-text">满68元可用</p>
            </div>
            <div class="list-cardBox-ct">
              <h2 class="title">邀请有礼</h2>
              <p class="p1">2019.10.01-2019.11.31</p>
              <p class="p1">全部服务可用</p>
            </div>
            <div class="list-cardBox-btn">
              立即使用
            </div>

          </div>
        </li>
        
      </ul>
      <ul class="ticket-cont-itemUl" v-if="ticketType===2">
        <li class="ticket-cont-list">
          <div class="list-cardBox">
            <div class="list-cardBox-fl apply-cardBox">
              <p class="money"><span>¥</span>5</p>
              <p class="money-text">满68元可用</p>
            </div>
            <div class="list-cardBox-ct">
              <h2 class="title">邀请有礼</h2>
              <p class="p1">2019.10.01-2019.11.31</p>
              <p class="p1">全部服务可用</p>
            </div>
            <div class="list-cardBox-btn apply-cardBtn">
              已使用
            </div>

          </div>
        </li>
        
      </ul>
      <ul class="ticket-cont-itemUl" v-if="ticketType===3">
        <li class="ticket-cont-list">
          <div class="list-cardBox">
            <div class="list-cardBox-fl apply-cardBox">
              <p class="money"><span>¥</span>5</p>
              <p class="money-text">满68元可用</p>
            </div>
            <div class="list-cardBox-ct">
              <h2 class="title">邀请有礼</h2>
              <p class="p1">2019.10.01-2019.11.31</p>
              <p class="p1">全部服务可用</p>
            </div>
            <div class="list-cardBox-btn apply-cardBtn">
              已过期
            </div>

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
    ticketState: function (no) {
      this.ticketType = no
    }
  }
}
</script>


