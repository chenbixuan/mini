<template>
  <div class="works-content">
    <div class="works-cont-item" v-for="(item, index) in lists" :key="index">
      <h2 class="title">{{ item.date }}</h2>
      <p class="p-text">{{ item.title }}</p>
      <ul class="works-ul">
        <li class="works-cont-list" v-for="(file, i) in item.files" :key="i" @click="previewImage(index,i)">
          <img :src="file.url" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { get } from '../../utils'

export default {
  components: {
  },

  data () {
    return {
      lists: [],
      page: 1,
      hasNext: false,
      jsonText1: [],
      jsonText2: [],
      jsonText3: []
    }
  },

  mounted () {
    this.getData()
  },

  onReachBottom () {
    if (this.hasNext) this.getData()
  },

  methods: {
    async getData () {
      const { lists, hasNext } = await get(`/kz?page=${this.page}`)

      lists.map(item => {
        item.date = moment(item.date).format('YYYY-MM-DD HH:mm')
        this.lists.push(item)
      })
      this.hasNext = hasNext
      this.page++
    },
    previewImage: function (index, key) {
      console.log(index, key)
      let that = this
      that.jsonText1 = []
      that.jsonText2 = []
      that.jsonText3 = []

      let option1 = that.lists[0].files
      let option2 = that.lists[1].files
      let option3 = that.lists[2].files

      for (var j = 0; j < option1.length; j++) {
        that.jsonText1.push(option1[j].url)
      }
      for (var f = 0; f < option2.length; f++) {
        that.jsonText2.push(option2[f].url)
      }
      for (var n = 0; n < option3.length; n++) {
        that.jsonText3.push(option3[n].url)
      }

      console.log(that.jsonText1)
      console.log(that.jsonText2)
      console.log(that.jsonText3)
      if (key >= 0 && key < 9) {
        wx.previewImage({
          current: option1[key].url, // 当前显示图片的http链接
          urls: that.jsonText1 // 需要预览的图片http链接列表
        })
      }
      if (key >= 9 && key < 18) {
        wx.previewImage({
          current: option2[key].url, // 当前显示图片的http链接
          urls: that.jsonText2 // 需要预览的图片http链接列表
        })
      }
      if (key >= 18 && key < 27) {
        wx.previewImage({
          current: option3[key].url, // 当前显示图片的http链接
          urls: that.jsonText3 // 需要预览的图片http链接列表
        })
      }
    }
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
