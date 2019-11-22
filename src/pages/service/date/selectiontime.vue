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
          :days-color="dayStyle" @dayClick="dayClick" @dateChange="dayChange"  weeks-type="cn" @nextMonth="next" @prevMonth="prev"/>
        </div>
      </div>
      <div class="selectiontime-cont-time">
        <div class="timeBox">
          <ul>
            <li class="timeBox-list" :class="{'on':timeIndex==i}" v-for="(p, i) in periods" :key="i" @click="setPeriod(i)">{{ p }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="btn selectiontime-cont-btn" @click="handleOpen1()">预约</div>
    <!-- <i-action-sheet :visible="visible1" :actions="actions1" show-cancel @click="handleCancel1" bind:click="handleClickItem1" > -->
    <subscribe-alert-box></subscribe-alert-box>
    <!-- </i-action-sheet> -->
    <i-modal :visible="visible2" @ok="handleClose2" @cancel="handleClose2">
        <view>请预约正确的时间</view>
    </i-modal>
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
    yearDate: null,
    monthDate: null,
    dayTime: null,
    visible2: false,
    clickDayObj: null,
    selectDay: null,
    selectMonth: null,
    selectYear: null,
    timeIndex: undefined
  },
  mounted: function () {
    console.log('我进来了')
    this.getShop()
    this.timeIndex = -1
    let today = new Date().getDate()
    console.log(this.yearDate)
    console.log(this.monthDate)
    console.log(this.dayTime)
    this.dayStyle = []
    this.clickDayObj = null
    this.setReadOnlyStyle()
    this.clickDayObj = {month: 'current', day: today, color: '#353535', background: '#E7C394', borderRadius: '50%'}
    this.selectDay = this.dayTime = new Date().getDate()
    this.selectMonth = this.monthDate = (new Date().getMonth()) + 1
    this.selectYear = this.yearDate = new Date().getFullYear()
    this.dayStyle.push(this.clickDayObj)
  },
  components: {
    subscribeAlertBox
  },
  methods: {
    setPeriod: function (i) {
      this.timeIndex = i
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
      console.log('d3211231231231233')
      let clickDay = this.selectDay = event.mp.detail.day
      let clickMonth = this.selectMonth = event.mp.detail.month
      let clickYear = this.selectYear = event.mp.detail.year
      let tmpDate = new Date()
      tmpDate.setFullYear(clickYear)
      tmpDate.setMonth(clickMonth - 1)
      tmpDate.setDate(clickDay)
      tmpDate.setHours(0)
      let compareDate = new Date()
      compareDate.setHours(0)
      if (tmpDate.getTime() < compareDate.getTime() - 2000) {
        this.visible2 = true
        return
      }
      this.dayTime = event.mp.detail.day
      console.log(clickDay)
      if (!!this.clickDayObj && this.dayStyle.length > 0) {
        for (var index in this.dayStyle) {
          if (this.clickDayObj === this.dayStyle[index]) {
            this.dayStyle.splice(index, 1)
          }
        }
      }
      console.log(this.dayStyle)
      this.clickDayObj = {month: 'current', day: clickDay, color: '#353535', background: '#E7C394', borderRadius: '50%'}
      this.dayStyle.push(this.clickDayObj)
      let datStyleForApp = this.dayStyle
      this.$mp.page.setData({datStyleForApp})
      this.dayTime = this.selectDay
      console.log(event.mp.detail)
      this.monthDate = event.mp.detail.month
      this.yearDate = event.mp.detail.year
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
      console.log('eweggrg')
      console.log(e)

      this.setReadOnlyStyle(e)
      // this.commonDate(e)
      console.log(this.dayStyle)
      // console.log(this.monthDate)
      // if (this.dayStyle.length !== 0) {
      //   this.dayStyle[0].background = ''
      //   this.dayStyle[0].color = ''
      // }
      //
    },
    setReadOnlyStyle (e) {
      this.dayStyle = []
      if (this.clickDayObj) {
        if (!e) { this.dayStyle.push(this.clickDayObj) } else if (this.selectMonth === e.mp.detail.currentMonth && this.selectYear === e.mp.detail.currentYear) {
          this.dayStyle.push(this.clickDayObj)
        }
      }

      if (!e) {
        // 首次加载置灰
        for (let dayTime = 1; dayTime < this.day; dayTime++) {
          this.dayStyle.push({ month: 'current', day: dayTime, color: '#B7B6B6', background: '' })
        }
      } else {
        console.log(e)
        e = e.mp.detail
        console.log(e.currentYear, e.currentMonth)
        let CompareMonth = new Date(e.currentYear + '-' + e.currentMonth + '-1')
        let thisMonth = new Date(this.year + '-' + this.month + '-1')
        if (CompareMonth.getTime() < thisMonth.getTime()) {
          let tmpDate = new Date()
          if (e.currentMonth === 12) {
            tmpDate.setFullYear(e.currentYear + 1)
            tmpDate.setMonth(1)
            tmpDate.setDate(1)
            tmpDate.setHours(0)
          } else {
            tmpDate.setFullYear(e.currentYear)
            tmpDate.setMonth(e.currentMonth)
            tmpDate.setDate(1)
            tmpDate.setHours(0)
          }
          console.log(new Date(tmpDate.getTime() - 60 * 60 * 1000))
          let dayLimit = new Date(tmpDate.getTime() - 60 * 60 * 1000).getDate()
          console.log(e.currentMonth)
          for (let dayTime = 1; dayTime <= dayLimit; dayTime++) {
            this.dayStyle.push({ month: 'current', day: dayTime, color: '#B7B6B6', background: '' })
          }
          this.$forceUpdate()
        } else if (CompareMonth.getTime() === thisMonth.getTime()) {
          for (let dayTime = 1; dayTime < this.day; dayTime++) {
            this.dayStyle.push({ month: 'current', day: dayTime, color: '#B7B6B6', background: '' })
          }
        }
      }
    },
    next (e) {
      this.setReadOnlyStyle(e)
    },
    prev (e) {
      this.setReadOnlyStyle(e)
    },
    commonDate (e) {
      console.log(this.selectDay)

      this.dayStyle.shift()
      this.dayStyle.push({month: 'current', day: '', color: '', background: '', borderRadius: ''})
      let datStyleForApp = this.dayStyle
      this.$mp.page.setData({datStyleForApp})
      this.$forceUpdate()
    },
    handleClose2 () {
      this.visible2 = false
    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
