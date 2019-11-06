import Vue from 'vue'
import App from './App'
import Axios from 'axios'
Vue.config.productionTip = false
App.mpType = 'app'
Axios.defaults.timeout = 500000
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
Axios.defaults.baseURL = 'http://doc.wxwind.com/docs/#/'

Vue.prototype.$axios = Axios
const app = new Vue(App)
app.$mount()
