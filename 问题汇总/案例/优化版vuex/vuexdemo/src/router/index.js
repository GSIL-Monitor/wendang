import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Store from '@/components/store'
import Axios from '@/components/axios'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/store',
      name: 'Store',
      component: Store
    },{
      path: '/axios',
      name: 'Axios',
      component: Axios
    }
  ]
})
