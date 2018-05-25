import Vue from 'vue'
import Router from 'vue-router'

import NotFound from './../404.vue'

import Index from './../view/index.vue'
import Detail from './../view/detail.vue'
import IndexPc from './../view/index-pc.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        { path: '/detail', name: 'Detail', component: Detail }
      ],
    },
    {
      path: '/index',
      name: 'IndexPc',
      component: IndexPc
    },
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})
