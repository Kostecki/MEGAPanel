import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from 'firebase'

import App from './App.vue'
import router from './router'
import { store } from './store'

import Alert from './components/Shared/Alert.vue'

import './registerServiceWorker'

Vue.config.productionTip = false

// Custom global alert component
Vue.component('AppAlert', Alert)

// Vuetify
Vue.use(Vuetify)

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