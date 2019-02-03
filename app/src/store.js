import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
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
    user: null,
    loading: false,
    error: null
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
              id: user.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
        })
    },
    loadAnimations ({ commit }) {
      commit('setLoading', true)
      firebase.database().ref('animations').once('value')
        .then(data => {
          const animations = []
          const obj = data.val()
          for (let key in obj) {
            animations.push({
              id: key,
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
      let lightsConf = payload
      lightsConf['brightness'] = payload.color.a
      // TODO: POST to API)
      commit('updateLightsConf', lightsConf)
    }
  }
})
