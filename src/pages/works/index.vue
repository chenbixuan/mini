<template>
  <div class="works-content">
    <div class="works-cont-item" v-for="(item, index) in lists" :key="index">
      <h2 class="title">{{ item.date }}</h2>
      <p class="p-text">{{ item.title }}</p>
      <ul class="works-ul">
        <li class="works-cont-list" v-for="(file, i) in item.files" :key="i">
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
