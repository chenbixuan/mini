<template>
  <div class="name-content">
    <div class="name-cont-main">
      <span class="text">电话</span>
      <div class="putBox">
        <input type="text" placeholder="请输入..." />
      </div>
    </div>
    <p class="btn btn-sumbit">确认</p>
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


