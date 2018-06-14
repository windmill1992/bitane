import Vue from 'vue'
import Router from 'vue-router'

import NotFound from './../404.vue'

import Index from './../view/index.vue'
import Detail from './../view/detail.vue'
import IndexPc from './../view/index-pc.vue'
import MarketPc from './../view/market-pc.vue'
import AboutPc from './../view/about-pc.vue'

Vue.use(Router)

// Router.beforeEach((to, from, next) => {
//   window.document.title = to.meta.title;
//   next()
// })
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/m_index',
      name: 'Index',
      component: Index,
      meta: {
        title: '全球数字货币交易平台-币探'
      }
    },
    {
      path: '/market/:code',
      name: 'MarketPc',
      component: MarketPc,
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
      }
    },
    {
      path: '/about',
      name: 'AboutPc',
      component: AboutPc,
      meta: {
        title: '关于我们-币探'
      }
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
      redirect: { path: '/m_index' }
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
