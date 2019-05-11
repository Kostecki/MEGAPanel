import firebase from 'firebase/app'
import 'firebase/database'

export default {
  state: {
    animations: null,
    lightsConfig: {
      animation: 'solid',
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      },
      speed: 0
    }
  },
  mutations: {
    animations (state, payload) {
      state.animations = payload
    },
    lightsConfig (state, payload) {
      state.lightsConfig = payload
    }
  },
  actions: {
    animations ({ commit }) {
      commit('loading', true)
      commit('clearMessage')
      firebase.database().ref('animations').on('value', response => {
        const animations = []
        const obj = response.val()
        for (let key in obj) {
          animations.push({
            key: key,
            name: obj[key].name,
            value: obj[key].value,
            speedControl: obj[key].speedControl
          })
        }

        commit('animations', animations)
        commit('loading', false)
      }, error => {
        commit('setMessage', { text: error.message, type: 'error' })
        commit('loading', false)
      })
    },
    getLightsConfig ({ commit, dispatch }) {
      firebase.database().ref('lightsConfig').on('value', response => {
        commit('lightsConfig', response.val())
      }, error => {
        commit('setMessage', { text: error.message, type: 'error' })
      })
    },
    lightsConfig ({ commit }, payload) {
      let lightsConfig = {
        ...payload,
        brightness: payload.color.a
      }

      commit('lightsConfig', lightsConfig)
      firebase.database().ref('lightsConfig').set(lightsConfig)
        .then(() => commit('setMessage', {
          text: 'Lights changed successfully',
          type: 'success'
        }))
        .catch(error => commit('setMessage', { text: error.message, type: 'error' }))
    },
    newAnimation ({ commit, dispatch }, payload) {
      commit('clearMessage')

      return new Promise((resolve, reject) => {
        firebase.database().ref('animations').push(payload)
          .then(() => {
            resolve()
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

      let animation = Object.assign({}, payload.animation)
      delete animation['key']

      firebase.database().ref('animations').child(payload.key).set(animation)
        .then(() => {
          commit('setMessage', {
            text: 'Animation updated successfully',
            type: 'success'
          })
        })
        .catch(error => commit('setMessage', { text: error.message, type: 'error' }))
    },
    deleteAnimation ({ commit, dispatch }, payload) {
      commit('clearMessage')

      firebase.database().ref('animations').child(payload).remove()
        .then(() => {
          commit('setMessage', {
            text: 'Animation deleted successfully',
            type: 'success'
          })
        })
        .catch(error => commit('setMessage', { text: error.message, type: 'error' }))
    }
  }
}
