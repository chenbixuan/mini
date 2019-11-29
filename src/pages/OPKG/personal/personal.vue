<template>
  <div class="personal-home" :class="{'personal-padTop':!infoFlag}">
    <div class="personal-home-banner" v-if="infoFlag" @click="infoCilck()"> 
      <h2>补全个人资料即可点亮全部会员权益</h2>
      <p>立刻获取60积分</p>
    </div>
    <div class="personal-cont-main">
      <div class="personal-cont-fromBox">
        <h2 class="fromBox-title">基本信息</h2>
        <ul class="fromBox-ul">
          <li class="fromBox-list" @click="nameInput()">
            姓名<span>小轩<img src="/static/images/img27.png" /></span>
          </li>
          <li class="fromBox-list" @click="sexClick()">
            性别<span>女<img src="/static/images/img27.png" /></span>
          </li>
          <li class="fromBox-list">
            <!-- 生日<span>未填写<img src="/static/images/img27.png" /></span> -->
            生日
            <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
              <div class="picker">
                当前选择: {{date}}
              </div>
            </picker>
          </li>
        </ul>
      </div>
      <div class="personal-cont-fromBox">
        <h2 class="fromBox-title">账号安全</h2>
        <ul class="fromBox-ul">
          <li class="fromBox-list" @click="phoneInput()">
            手机号码<span>18129957770<img src="/static/images/img27.png" /></span>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      date: moment(new Date()).format('YYYY-MM-DD'),
      infoFlag: true
    }
  },
  created: function () {

  },
  methods: {
    nameInput: function () {
      wx.navigateTo({
        url: '../name/main'
      })
    },
    phoneInput: function () {
      wx.navigateTo({
        url: '../phone/main'
      })
    },
    bindDateChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.date = e.mp.detail.value
    },
    infoCilck: function () {
      this.infoFlag = false
    },
    sexClick: function () {
      mpvue.showToast({
        title: '性别已命中注定，无法修改，嘿嘿!',
        icon: 'none'
      })
    }
  }
}
</script>


