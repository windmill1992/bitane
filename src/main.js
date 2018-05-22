// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui'
import router from './router'
import axios from 'axios'

Vue.use(Mint)

axios.defaults.headers = {
  'lang': 'cn', 
  'content-type': 'application/json',
  'legalTende': 1,
  'applicationId': 2,
  'applicationClientType': 1
}
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
