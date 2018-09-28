import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/index')
        },
        {
          path: 'register',
          component: () => import('@/views/register')
        },
        {
          path: 'write',
          component: () => import('@/views/writeNote')
        },
        {
          path: 'article',
          name: 'article',
          component: () => import('@/views/article')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
