import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Watch from '@/components/watch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      component: HelloWorld,
      	alias: '/'
    }, {
      path: '/watch',
      component: Watch
    }
  ]
})
