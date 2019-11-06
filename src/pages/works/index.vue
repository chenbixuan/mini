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
      page: 1
    }
  },

  mounted () {
    this.getData()
  },

  onReachBottom () {
    this.getData()
  },

  methods: {
    async getData () {
      const kz = await get(`/kz?page=${this.page}`)

      kz.rows.map(item => {
        item.date = moment(item.date).format('YYYY-MM-DD HH:mm')
        this.lists.push(item)
      })
      this.page++
    },
    previewImage: function (index, key) {
      let that = this
      var jsonText = new Array(that.lists[index].files[key].url)
      // var current = e.target.dataset.src
      wx.previewImage({
        current: that.lists[index].files[key].url, // 当前显示图片的http链接
        urls: jsonText // 需要预览的图片http链接列表
      })
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
