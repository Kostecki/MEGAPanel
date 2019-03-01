import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import router from '../router'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    animations: null,
    lightsConf: {
      animation: 'solid',
      color: {
        r: 255,
        g: 0,
        b: 0,
        a: 0.5
      },
      speed: 0
    },
    loading: false,
    message: null,
    user: null,
    isAuthenticated: false
  },
  getters: {
    loading (state) {
      return state.loading
    },
    message (state) {
      return state.message
    },
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    },
    animations (state) {
      return state.animations
    },
    lightsConf (state) {
      return state.lightsConf
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setMessage (state, payload) {
      state.message = payload
    },
    clearMessage (state) {
      state.message = null
    },
    setUser (state, payload) {
      state.user = payload
    },
    isAuthenticated (state, payload) {
      state.isAuthenticated = payload
    },
    setLoadedAnimations (state, payload) {
      state.animations = payload
    },
    updateLightsConf (state, payload) {
      state.lightsConf = payload
    }
  },
  actions: {
    clearMessage ({ commit }) {
      commit('clearMessage')
    },
    signUserIn ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearMessage')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              email: user.email
            }
            commit('setUser', newUser)
            commit('isAuthenticated', true)
          }
        )
        .catch(error => {
          commit('isAuthenticated', false)
          commit('setLoading', false)
          commit('setMessage', {
            text: error.message,
            type: 'error'
          })
        })
    },
    changePassword ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearMessage')
      return new Promise((resolve, reject) => {
        firebase.auth().currentUser.updatePassword(payload)
          .then(response => {
            commit('setLoading', false)
            commit('setMessage', {
              text: 'Password changed successfully',
              type: 'success'
            })
            resolve()
          })
          .catch(error => {
            commit('setLoading', false)
            commit('setMessage', {
              text: error.message,
              type: 'error'
            })
            reject(error)
          })
      })
    },
    autoSignIn ({ commit }, payload) {
      commit('setUser', {
        id: payload.uid,
        email: payload.email
      })
      commit('isAuthenticated', true)
    },
    logout ({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
      commit('isAuthenticated', false)
      router.push({ path: '/' })
    },
    loadAnimations ({ commit }) {
      commit('setLoading', true)
      commit('clearMessage')
      firebase.database().ref('animations').once('value')
        .then(data => {
          const animations = []
          const obj = data.val()
          for (let key in obj) {
            animations.push({
              key: key,
              name: obj[key].name,
              value: obj[key].value,
              speedControl: obj[key].speedControl
            })
          }

          commit('setLoadedAnimations', animations)
          commit('setLoading', false)
        })
        .catch(error => {
          commit('setMessage', {
            text: error.message,
            type: 'error'
          })
          commit('setLoading', false)
        })
    },
    updateLightsConf ({ commit }, payload) {
      let lightsConf = {
        ...payload,
        brightness: payload.color.a
      }
      // TODO: POST to API
      console.log(payload)
      commit('updateLightsConf', lightsConf)
    },
    addNewAnimation ({ commit, dispatch }, payload) {
      commit('clearMessage')

      return new Promise((resolve, reject) => {
        firebase.database().ref('animations').push(payload)
          .then(() => {
            resolve()
            dispatch('loadAnimations')
            commit('setMessage', {
              text: 'Animation added successfully',
              type: 'success'
            })
          })
          .catch(error => reject(error))
      })
    },
    updateAnimation ({ commit, dispatch }, payload) {
      commit('clearMessage')

      let animation = payload.animation
      delete animation['key']

      firebase.database().ref('animations').child(payload.key).set(animation)
        .then(() => {
          dispatch('loadAnimations')
          commit('setMessage', {
            text: 'Animation updated successfully',
            type: 'success'
          })
        })
        .catch(error => {
          commit('setMessage', {
            text: error.message,
            type: 'error'
          })
        })
    },
    deleteAnimation ({ commit, dispatch }, payload) {
      commit('clearMessage')

      firebase.database().ref('animations').child(payload).remove()
        .then(() => {
          dispatch('loadAnimations')
          commit('setMessage', {
            text: 'Animation deleted successfully',
            type: 'success'
          })
        })
        .catch(error => {
          commit('setMessage', {
            text: error.message,
            type: 'error'
          })
        })
    }
  }
})
