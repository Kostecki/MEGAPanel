import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase/app'
import 'firebase/auth'

import App from './App.vue'
import router from './router'
import { store } from './store'

// Global Custom Components
import Message from './components/Shared/Message.vue'

// Global Mixins
import { formatDataUnit } from './mixins/formatDataUnit'

import './registerServiceWorker'

Vue.config.productionTip = false

// Global Custom Components
Vue.component('AppMessage', Message)

// Global Mixins
Vue.mixin(formatDataUnit)

// Vuetify
Vue.use(Vuetify, {
  theme: {
    primary: '#FF3D02'
  }
})

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
