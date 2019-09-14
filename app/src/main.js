import Vue from 'vue'

import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import 'firebase/auth'
import moment from 'moment'

import App from './App.vue'
import router from './router'
import { store } from './store'

import Message from './components/Shared/Message.vue'

import { formatDataUnit } from './mixins/formatDataUnit'

import './registerServiceWorker'

Vue.component('AppMessage', Message)

Vue.mixin(formatDataUnit)

Vue.filter('capitalize', value => {
  if (value) {
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
})

Vue.filter('epochToHuman', value => {
  if (value) {
    let newDate = new Date(value)
    return moment(newDate).format('dddd, MMMM Do YYYY - HH:mm')
  }
})

// Vue.use(Vuetify, { theme: { primary: '#FF3D02' } })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
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
        this.$store.dispatch('user/autoSignIn', user)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
