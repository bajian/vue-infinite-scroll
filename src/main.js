import Vue from 'vue'
import App from './App'


var infiniteScroll =  require('./components/infinite-scroll');
Vue.use(infiniteScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
