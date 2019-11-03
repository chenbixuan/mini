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
          next="false" prev="false" show-more-days='true'
          days-color="dayStyle" weeks-type="cn" binddayClick="dayClick"/>
        </div>
      </div>
      <div class="selectiontime-cont-time">
        <div class="timeBox">
          <ul>
            <li class="timeBox-list">11:00-12:00</li>
            <li class="timeBox-list">12:00-13:00</li>
            <li class="timeBox-list">13:00-14:00</li>
            <li class="timeBox-list">14:00-15:00</li>
            <li class="timeBox-list">15:00-16:00</li>
            <li class="timeBox-list">16:00-17:00</li>
            <li class="timeBox-list">17:00-18:00</li>
            <li class="timeBox-list">18:00-19:00</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="btn selectiontime-cont-btn" @click="handleOpen1">预约</div>
    <!-- <i-action-sheet :visible="visible1" :actions="actions1" show-cancel @click="handleCancel1" bind:click="handleClickItem1" > -->
    <subscribe-alert-box></subscribe-alert-box>
    <!-- </i-action-sheet> -->
  </div>
</template>

<script>
import EventBus from 'scripts/EventBus'
import subscribeAlertBox from '@/pages/service/subscribealertbox'
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
export default {

  data () {
    return {
      year: new Date().getFullYear(), // 年份
      month: new Date().getMonth() + 1, // 月份
      day: new Date().getDate(),
      str: MONTHS[new Date().getMonth()], // 月份字符串

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
      ]
    }
  },
  mounted: function () {
    const daysCount = new Date(this.year, this.month, 0).getDate()
    let demo1DaysStyle = []
    for (let i = 1; i <= daysCount; i++) {
      const date = new Date(this.year, this.month - 1, i)
      if (date.getDay() === 0) {
        demo1DaysStyle.push({
          month: 'current', day: i, color: '#f488cd'
        })
      } else {
        demo1DaysStyle.push({
          month: 'current', day: i, color: '#a18ada'
        })
      }
    }
    demo1DaysStyle.push({ month: 'current', day: 12, color: 'white', background: '#b49eeb' })
    demo1DaysStyle.push({ month: 'current', day: 17, color: 'white', background: '#f5a8f0' })
    demo1DaysStyle.push({ month: 'current', day: 20, color: 'white', background: '#aad4f5' })
    demo1DaysStyle.push({ month: 'current', day: 25, color: 'white', background: '#84e7d0' })
  },
  components: {
    subscribeAlertBox
  },
  methods: {
    // 给点击的日期设置一个背景颜色
    dayClick: function (event) {
      let clickDay = event.detail.day
      let changeDay = `dayStyle[1].day`
      let changeBg = `dayStyle[1].background`
      this.setData({
        [changeDay]: clickDay,
        [changeBg]: '#84e7d0'
      })
    },
    handleOpen1 () {
      EventBus.$emit('GBKBalance')
    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
