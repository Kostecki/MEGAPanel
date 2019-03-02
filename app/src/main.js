import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase/app'
import 'firebase/auth'

import App from './App.vue'
import router from './router'
import { store } from './store'

import Message from './components/Shared/Message.vue'
import { formatDataUnit } from './mixins/formatDataUnit'

import './registerServiceWorker'

Vue.component('AppMessage', Message)

Vue.mixin(formatDataUnit)

Vue.filter('capitalize', value => {
  if (!value) return ''
  value = value.toString()

  return value.charAt(0).toUpperCase() + value.slice(1)
})

// Vuetify
Vue.use(Vuetify, {
  theme: {
    primary: '#FF3D02'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDnheuTGZwZAXzOYA6UwEF6EVrlostKl1o',
      authDomain: 'megaboominator.firebaseapp.com',
      databaseURL: 'https://megaboominator.firebaseio.com',
      projectId: 'megaboominator',
      storageBucket: 'megaboominator.appspot.com'
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadAnimations')
  }
}).$mount('#app')
