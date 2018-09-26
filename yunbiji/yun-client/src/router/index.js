import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout'

Vue.use(Router)

export default new Router({
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
        }
      ]
    }
  ]
})
