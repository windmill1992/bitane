import Vue from 'vue'
import Router from 'vue-router'

import Index from './../view/index.vue'
import Detail from './../view/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        { path: '/detail', name: 'Detail', component: Detail }
      ]
    }
  ]
})
