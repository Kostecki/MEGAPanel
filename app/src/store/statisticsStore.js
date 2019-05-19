import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  namespaced: true,
  state: {
    currentBatteryVoltage: null,
    batteries: {},
    amps: {
      live: null,
      min: null,
      max: null
    }
  },
  mutations: {
    currentBatteryVoltage (state, payload) {
      state.currentBatteryVoltage = payload
    },
    batteries (state, payload) {
      state.batteries = payload
    },
    liveAmps (state, payload) {
      state.amps.live = payload
    },
    minAmps (state, payload) {
      state.amps.min = payload
    },
    maxAmps (state, payload) {
      state.amps.max = payload
    }
  },
  actions: {
    currentBatteryVoltage ({ commit }) {
      commit('shared/clearMessage', null, { root: true })
      firebase.database().ref('voltages').limitToLast(1).on('value', response => {
        if (response.val()) {
          const key = Object.keys(response.val())
          const data = response.val()[key[0]]

          commit('currentBatteryVoltage', data.voltage)
        }
      }, error => {
        commit('setMessage', { text: error.message, type: 'error' }, { root: true })
      })
    },
    batteries ({ commit }) {
      commit('shared/clearMessage', null, { root: true })
      firebase.database().ref('batteries').on('value', response => {
        if (response.val()) {
          commit('batteries', response.val())
        }
      }, error => {
        commit('setMessage', { text: error.message, type: 'error' }, { root: true })
      })
    },
    getAmps ({ dispatch }) {
      dispatch('liveAmps')
      dispatch('minAmps')
      dispatch('maxAmps')
    },
    liveAmps ({ commit, dispatch }) {
      commit('shared/clearMessage', null, { root: true })
      firebase.database().ref('current').limitToLast(1).on('value', response => {
        if (response.val()) {
          const key = Object.keys(response.val())
          const data = response.val()[key[0]]

          commit('liveAmps', data.current)
        }
      }, error => {
        commit('setMessage', { text: error.message, type: 'error' }, { root: true })
      })
    },
    minAmps ({ commit }) {
      commit('shared/clearMessage', null, { root: true })
      firebase.database().ref('current').orderByChild('current').limitToFirst(1).on('value', response => {
        if (response.val()) {
          const key = Object.keys(response.val())
          const data = response.val()[key[0]]

          commit('minAmps', data.current)
        }
      }, error => {
        commit('setMessage', { text: error.message, type: 'error' }, { root: true })
      })
    },
    maxAmps ({ commit }) {
      commit('shared/clearMessage', null, { root: true })
      firebase.database().ref('current').orderByChild('current').limitToLast(1).on('value', response => {
        if (response.val()) {
          const key = Object.keys(response.val())
          const data = response.val()[key[0]]

          commit('maxAmps', data.current)
        }
      }, error => {
        commit('setMessage', { text: error.message, type: 'error' }, { root: true })
      })
    }
  }
}
