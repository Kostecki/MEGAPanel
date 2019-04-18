import firebase from 'firebase/app'
import 'firebase/database'

export default {
  state: {
    batteries: null
  },
  mutations: {
    batteries (state, payload) {
      state.batteries = payload
    }
  },
  actions: {
    batteries ({ commit }) {
      commit('loading', true)
      commit('clearMessage')
      firebase.database().ref('batteries').on('value', response => {
        if (response.exists()) {
          const batteries = []
          const obj = response.val()
          for (let key in obj) {
            batteries.push({
              key: key,
              batteryId: obj[key].batteryId,
              voltage: obj[key].voltage,
              currentBattery: obj[key].currentBattery
            })
          }

          commit('batteries', batteries)
          commit('loading', false)
        }
      }, error => {
        commit('setMessage', { text: error.message, type: 'error' })
        commit('loading', false)
      })
    },
    addNewBattery ({ commit, dispatch }, payload) {
      commit('clearMessage')

      return new Promise((resolve, reject) => {
        firebase.database().ref('batteries').push(payload)
          .then(() => {
            resolve()
            dispatch('batteries')
            commit('setMessage', {
              text: 'Battery added successfully',
              type: 'success'
            })
          })
          .catch(error => reject(error))
      })
    },
    updateBattery ({ commit, dispatch }, payload) {
      commit('clearMessage')

      let battery = Object.assign({}, payload.battery)
      delete battery['key']

      firebase.database().ref('batteries').child(payload.key).set(battery)
        .then(() => {
          dispatch('batteries')
          commit('setMessage', {
            text: 'Battery updated successfully',
            type: 'success'
          })
        })
        .catch(error => {
          commit('setMessage', { text: error.message, type: 'error' })
        })
    },
    deleteBattery ({ commit, dispatch }, payload) {
      commit('clearMessage')

      firebase.database().ref('batteries').child(payload).remove()
        .then(() => {
          dispatch('batteries')
          commit('setMessage', {
            text: 'Battery deleted successfully',
            type: 'success'
          })
        })
        .catch(error => {
          commit('setMessage', { text: error.message, type: 'error' })
        })
    }
  }
}
