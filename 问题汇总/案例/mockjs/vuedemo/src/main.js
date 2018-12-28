// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueMeta from 'vue-meta'
import axios from 'axios'
Vue.use(vueMeta)
Vue.prototype.$ajax= axios
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
