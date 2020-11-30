  
import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App.vue'
import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'
import VueAnime from 'vue-animejs';

import store from './config/store'
import router from './config/router'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueAnime)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')