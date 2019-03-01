import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store'

import SignIn from '@/components/User/SignIn.vue'
import Lights from '@/components/Lights/Lights.vue'
import Statistics from '@/components/Statistics/Statistics.vue'
import Settings from '@/components/Settings/Settings.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signin',
      name: 'Sign In',
      component: SignIn
    },
    {
      path: '/',
      redirect: '/statistics'
    },
    {
      path: '/lights',
      name: 'Lights',
      component: Lights,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/settings/:tab?',
      name: 'Settings',
      component: Settings,
      meta: {
        authRequired: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.isAuthenticated) {
      next({
        name: 'Sign In',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
