<template>
  <div class="selectiontime-content">
    <div class="selectiontime-cont-main">
      <div class="selectiontime-cont-date">
        <h2 class="title">预约时间</h2>
        <div class="dateBox">
          <calendar
          calendar-style="calendar"
          header-style="header"
          board-style="board"
          next="false" prev="false" shiow-more-days='true'
          :days-color="dayStyle" @dayClick="dayClick"  @dateChange="dayChange" weeks-type="cn" @nextMonth="next" @prevMonth="prev"/>
        </div>
      </div>
      <div class="selectiontime-cont-time">
        <div class="timeBox">
          <ul>
            <li class="timeBox-list" v-for="(p, i) in periods" :key="i" @click="setPeriod(i)">{{ p }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="btn selectiontime-cont-btn" @click="handleOpen1()">预约</div>
    <!-- <i-action-sheet :visible="visible1" :actions="actions1" show-cancel @click="handleCancel1" bind:click="handleClickItem1" > -->
    <subscribe-alert-box></subscribe-alert-box>
    <!-- </i-action-sheet> -->
  </div>
</template>

<script>
// import moment from 'moment'
import { get } from '@/utils'
import EventBus from 'scripts/EventBus'
import subscribeAlertBox from '@/pages/service/subscribealertbox'
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
export default {

  data: {
    shop: [],
    year: new Date().getFullYear(), // 年份
    month: new Date().getMonth() + 1, // 月份
    day: new Date().getDate(),
    str: MONTHS[new Date().getMonth()], // 月份字符串
    periods: [
      '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00',
      '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00'
    ],
    period: '',

    demo1DaysStyle: [],
    dayStyle: [
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' }
    ],
    visible1: false,
    actions1: [
      {
        name: '选项1'
      },
      {
        name: '选项2'
      },
      {
        name: '去分享',
        icon: 'share',
        openType: 'share'
      }

    ],
    dd: false,
    yearDate: new Date().getFullYear(),
    monthDate: (new Date().getMonth()) + 1,
    dayTime: new Date().getDate()
  },
  mounted: function () {
    this.getShop()

    let today = new Date().getDate()
    console.log(this.yearDate)
    console.log(this.monthDate)
    console.log(this.dayTime)
    this.dayStyle = []
    this.dayStyle.push({month: 'current', day: today, color: '#fff', background: '#9E312E', borderRadius: '50%'})
  },
  components: {
    subscribeAlertBox
  },
  methods: {
    setPeriod: function (i) {
      this.period = this.periods[i]
    },
    getShop: async function () {
      const { lists } = await get('/shop')
      this.shop = lists
    },
    // 给点击的日期设置一个背景颜色
    dayClick: function (event) {
      // console.log(event)
      // var dataA = `${this.yearDate}-${this.monthDate}-${event.mp.detail.day}`
      // var dataB = moment(new Date()).format('YYYY-MM-DD')
      // console.log(dataA)
      // console.log(dataB)
      // console.log(dataB > dataA)
      // if (dataB.diff(dataA) > 0) {
      //   this.dayStyle.push({month: 'current', day: '', color: '', background: '', borderRadius: ''})
      // }
      console.log(1)
      let clickDay = event.mp.detail.day
      this.dayTime = event.mp.detail.day
      console.log(clickDay)
      this.dayStyle.shift()
      console.log(this.dayStyle)
      this.dayStyle.push({month: 'current', day: clickDay, color: 'white', background: '#9E312E', borderRadius: '50%'})
      let datStyleForApp = this.dayStyle
      this.$mp.page.setData({datStyleForApp})
      this.$forceUpdate()
    },
    handleOpen1 () {
      EventBus.$emit('GBKBalance', {
        shop: this.shop,
        date: `${this.yearDate}-${this.monthDate}-${this.dayTime}`,
        period: this.period
      })

      // console.log(event)
      // let changeDay = event.mp.detail.color
      // let changeBg = event.mp.detail.background
      // console.log(clickDay)
      // console.log(changeDay)
      // console.log(changeBg)
      // changeDay = '#fff'
      // changeBg = '#9E312E'
      // let changeDay = `dayStyle[1].day`
      // let changeBg = `dayStyle[1].background`
      // this.setData({
      //   [changeDay]: clickDay,
      //   [changeBg]: '#84e7d0'
      // })
      // subscribeAlertBox.methods.showshadow()
      // this.succState = true
      this.$store.dispatch('setSwitchFlagState', true)
      // EventBus.$emit('GBKBalance', this.succState)
      // this.dd = true
    },
    dayChange (e) {
      console.log(e)
      this.commonDate(e)
      console.log('qqqqqq')
    },
    next (e) {
      console.log(e)
      this.commonDate(e)
      this.$forceUpdate()
    },
    prev (e) {
      console.log(e)
      this.commonDate(e)
    },
    commonDate (e) {
      this.yearDate = e.target.currentYear
      this.monthDate = e.target.currentMonth
      this.dayStyle.shift()
      this.dayStyle.push({month: 'current', day: '', color: '', background: '', borderRadius: ''})
      let datStyleForApp = this.dayStyle
      this.$mp.page.setData({datStyleForApp})
      this.$forceUpdate()
    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
