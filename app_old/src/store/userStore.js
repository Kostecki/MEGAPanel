import firebase from 'firebase/app'
import 'firebase/auth'
import router from '../router'

export default {
  namespaced: true,
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
      commit('shared/loading', true, { root: true })
      commit('shared/clearMessage', null, { root: true })
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('shared/loading', false, { root: true })
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
          commit('shared/loading', false, { root: true })
          commit('shared/setMessage', { text: error.message, type: 'error' }, { root: true })
        })
    },
    changePassword ({ commit }, payload) {
      commit('shared/loading', true, { root: true })
      commit('shared/clearMessage', null, { root: true })
      return new Promise((resolve, reject) => {
        firebase.auth().currentUser.updatePassword(payload)
          .then(response => {
            commit('shared/loading', false, { root: true })
            commit('shared/setMessage', {
              text: 'Password changed successfully',
              type: 'success'
            }, { root: true })
            resolve()
          })
          .catch(error => {
            commit('shared/loading', false, { root: true })
            commit('shared/setMessage', { text: error.message, type: 'error' }, { root: true })
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
