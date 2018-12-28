import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Store from '@/components/store'
import Animation from '@/components/animation'
import Mockjs from '@/components/mockjs'



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
      path: '/animation',
      name: 'Animation',
      component: Animation
    },{
      path: '/mockjs',
      name: 'Mockjs',
      component: Mockjs
    }
  ]
})
