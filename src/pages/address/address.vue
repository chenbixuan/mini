<template>
  <div class="address-content">
    <div class="home-block-address" v-for="(list,index) in shopDatas" :key="index">
      <p class="home-addree-img">
        <span v-for="(pic,key) in list.files" :key="key">
          <img  :src="pic.url"/>
        </span>
      </p>
      <div class="home-addree-text">
        <h2 class="title">
          {{list.name}}
        </h2>
        <h3 class="name">武汉{{list.addr}}旗舰店</h3>
        <p class="p-word">营业时间：{{list.createdAt}}</p>
        <p class="p-word" style="margin-bottom:20rpx">地址：{{list.addrJc}}</p>
        <p class="p-icon"><img class="p-icon-img" src="/static/images/img48.png"/><span class="p-word--text">13164100072</span></p>
        <p class="p-icon"><img class="p-icon-img" src="/static/images/img47.png"/><span class="p-word--text">{{list.addrGj}}</span></p>
      </div>
    </div>
    <!-- <div class="home-block-address">
      <p class="home-addree-img"><img src="https://chenbixuan.oss-cn-hangzhou.aliyuncs.com/test/home-address.png"/></p>
      <div class="home-addree-text">
        <h2 class="title">
          沉壁轩
        </h2>
        <h3 class="name">武汉街道口旗舰店</h3>
        <p class="p-word">营业时间：11:00-20:30</p>
        <p class="p-word" style="margin-bottom:20rpx">地址：武汉市洪山区埠华大厦B座2712</p>
        <p class="p-icon"><img class="p-icon-img" src="/static/images/img48.png"/><span class="p-word--text">13164100072</span></p>
        <p class="p-icon"><img class="p-icon-img" src="/static/images/img47.png"/><span class="p-word--text">路线指引</span></p>
      </div>
    </div> -->
  </div>
</template>

<script>
import { get } from '@/utils'
import moment from 'moment'
export default {
  data () {
    return {
      shopDatas: []
    }
  },
  created () {
    this.getAddress()
  },
  methods: {
    getAddress: async function () {
      const resData = await get('/shop')
      console.log('resData')
      console.log(resData.lists)
      console.log('resData')
      let shopList = resData.lists
      shopList.map(item => {
        item.createdAt = moment(item.createdAt).format('YYYY.MM.DD-hh:mm:ss')
        item.updatedAt = moment(item.updatedAt).format('YYYY.MM.DD-hh:mm:ss')
        this.shopDatas.push(item)
      })
    }
  }
}
</script>


