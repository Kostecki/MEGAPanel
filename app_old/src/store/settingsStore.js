import firebase from 'firebase/app'
import 'firebase/database'

export default {
  namespaced: true,
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
      commit('shared/loading', true, { root: true })
      commit('shared/clearMessage', null, { root: true })
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
          commit('shared/loading', false, { root: true })
        }
      }, error => {
        commit('shared/setMessage', { text: error.message, type: 'error' }, { root: true })
        commit('shared/loading', false, { root: true })
      })
    },
    addNewBattery ({ commit, dispatch }, payload) {
      commit('shared/clearMessage', null, { root: true })

      return new Promise((resolve, reject) => {
        firebase.database().ref('batteries').push(payload)
          .then(() => {
            resolve()
            dispatch('batteries')
            commit('shared/setMessage', {
              text: 'Battery added successfully',
              type: 'success'
            }, { root: true })
          })
          .catch(error => reject(error))
      })
    },
    updateBattery ({ commit, dispatch }, payload) {
      commit('shared/clearMessage', null, { root: true })

      let battery = Object.assign({}, payload.battery)
      delete battery['key']

      firebase.database().ref('batteries').child(payload.key).set(battery)
        .then(() => {
          dispatch('batteries')
          commit('shared/setMessage', {
            text: 'Battery updated successfully',
            type: 'success'
          }, { root: true })
        })
        .catch(error => {
          commit('shared/setMessage', { text: error.message, type: 'error' }, { root: true })
        })
    },
    deleteBattery ({ commit, dispatch }, payload) {
      commit('shared/clearMessage', null, { root: true })

      firebase.database().ref('batteries').child(payload).remove()
        .then(() => {
          dispatch('batteries')
          commit('shared/setMessage', {
            text: 'Battery deleted successfully',
            type: 'success'
          }, { root: true })
        })
        .catch(error => {
          commit('shared/setMessage', { text: error.message, type: 'error' }, { root: true })
        })
    }
  }
}
