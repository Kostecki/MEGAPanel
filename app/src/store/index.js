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
    error: null,
    user: null
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    user (state) {
      return state.user
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
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoadedAnimations (state, payload) {
      state.animations = payload
    },
    updateLightsConf (state, payload) {
      state.lightsConf = payload
    }
  },
  actions: {
    clearError ({ commit }) {
      commit('clearError')
    },
    signUserIn ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              email: user.email
            }
            commit('setUser', newUser)
          }
        )
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
        })
    },
    changePassword ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      return new Promise((resolve, reject) => {
        firebase.auth().currentUser.updatePassword(payload)
          .then(() => {
            commit('setLoading', false)
            resolve()
          })
          .catch(error => {
            commit('setLoading', false)
            reject(error)
          })
      })
    },
    autoSignIn ({ commit }, payload) {
      commit('setUser', {
        id: payload.uid,
        email: payload.email
      })
    },
    logout ({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
      router.push({ path: '/' })
    },
    loadAnimations ({ commit }) {
      commit('setLoading', true)
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
          console.log(error)
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
      return new Promise((resolve, reject) => {
        firebase.database().ref('animations').push(payload)
          .then(() => {
            resolve()
            dispatch('loadAnimations')
          })
          .catch(error => reject(error))
      })
    },
    updateAnimation ({ commit, dispatch }, payload) {
      let animation = payload.animation
      delete animation['key']

      firebase.database().ref('animations').child(payload.key).set(animation)
        .then(() => dispatch('loadAnimations'))
    },
    deleteAnimation ({ commit, dispatch }, payload) {
      firebase.database().ref('animations').child(payload).remove()
        .then(() => dispatch('loadAnimations'))
    }
  }
})
