import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
