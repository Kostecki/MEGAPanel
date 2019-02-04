import Vue from 'vue'
import Router from 'vue-router'

import AuthGuard from './auth-guard'
import Lights from '@/components/Lights/Lights.vue'
import SignIn from '@/components/User/SignIn.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/lights'
    },
    {
      path: '/lights',
      name: 'Lights',
      component: Lights,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'Sign In',
      component: SignIn
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
