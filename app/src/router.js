import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Lights from './components/Lights/Lights.vue'

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
      component: Lights
    },
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
