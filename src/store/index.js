import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations'
// import actions from './action'

Vue.use(Vuex)

// const state = {
//   token: mpvue.getStorageSync('token'),
//   openId: mpvue.getStorageSync('openId'),
//   switchFlag: false
// },

export default new Vuex.Store({
  // state,
  // actions,
  // mutations
  state: {
    switchFlag: false
  },
  mutations: {
    setSwitchFlag (state, name) {
      state.switchFlag = name
    }
  },
  actions: {
    setSwitchFlagState: (context, name) => {
      context.commit('setSwitchFlag', name)
    }
  }
})
