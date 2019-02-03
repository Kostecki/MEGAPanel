import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from 'firebase'

import App from './App.vue'
import router from './router'
import store from './store'

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
      apiKey: 'AIzaSyAio1DTLRtg4x0J9M9yRq3DTQK688Z6toc',
      authDomain: 'megapanel-3439e.firebaseapp.com',
      databaseURL: 'https://megapanel-3439e.firebaseio.com',
      projectId: 'megapanel-3439e',
      storageBucket: 'megapanel-3439e.appspot.com'
    })

    this.$store.dispatch('loadAnimations')
  }
}).$mount('#app')
