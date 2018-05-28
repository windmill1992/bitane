import Vue from 'vue'
import Router from 'vue-router'

import NotFound from './../404.vue'

import Index from './../view/index.vue'
import Detail from './../view/detail.vue'
import IndexPc from './../view/index-pc.vue'
import DetailPc from './../view/detail-pc.vue'

Vue.use(Router)

// Router.beforeEach((to, from, next) => {
//   window.document.title = to.meta.title;
//   next()
// })
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/exchange',
      name: 'Index',
      component: Index,
      meta: {
        title: '全球数字货币交易平台-币探'
      }
    },
    {
      path: '/exchange/:name',
      name: 'Detail',
      component: Detail,
      meta: {
        title: '交易平台实时行情-币探'
      }
    },
    {
      path: '/index',
      name: 'IndexPc',
      component: IndexPc,
      meta: {
        title: '全球数字货币交易平台-币探'
      },
      children: [
        { path: '/index/ex/:code', name: 'DetailPc', component: DetailPc, meta: { title: '交易平台实时行情-币探' } }
      ]
    },
    {
      path: '/404',
      component: NotFound,
      name: '404',
      hidden: true,
      meta: {
        title: '404'
      },
    },
    {
      path: '/',
      redirect: { path: '/exchange' }
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

export default router
