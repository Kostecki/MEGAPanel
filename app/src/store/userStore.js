import firebase from 'firebase/app'
import 'firebase/auth'
import router from '../router'

export default {
  state: {
    user: null,
    authenticated: false
  },
  getters: {
    isAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    }
  },
  mutations: {
    user (state, payload) {
      state.user = payload
    },
    authenticated (state, payload) {
      state.authenticated = payload
    }
  },
  actions: {
    signUserIn ({ commit }, payload) {
      commit('loading', true)
      commit('clearMessage')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('loading', false)
            const newUser = {
              id: user.uid,
              email: user.email
            }
            commit('user', newUser)
            commit('authenticated', true)
          }
        )
        .catch(error => {
          commit('authenticated', false)
          commit('loading', false)
          commit('setMessage', { text: error.message, type: 'error' })
        })
    },
    changePassword ({ commit }, payload) {
      commit('loading', true)
      commit('clearMessage')
      return new Promise((resolve, reject) => {
        firebase.auth().currentUser.updatePassword(payload)
          .then(response => {
            commit('loading', false)
            commit('setMessage', {
              text: 'Password changed successfully',
              type: 'success'
            })
            resolve()
          })
          .catch(error => {
            commit('loading', false)
            commit('setMessage', { text: error.message, type: 'error' })
            reject(error)
          })
      })
    },
    autoSignIn ({ commit }, payload) {
      commit('user', {
        id: payload.uid,
        email: payload.email
      })
      commit('authenticated', true)
    },
    logout ({ commit }) {
      firebase.auth().signOut()
      commit('user', null)
      commit('authenticated', false)
      router.push({ path: '/' })
    }
  }
}
