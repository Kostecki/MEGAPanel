import firebase from 'firebase/app'
import 'firebase/database'

export default {
  namespaced: true,
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
      commit('shared/loading', true, { root: true })
      commit('shared/clearMessage', null, { root: true })
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
        commit('shared/loading', false, { root: true })
      }, error => {
        commit('shared/setMessage', { text: error.message, type: 'error' }, { root: true })
        commit('shared/loading', false, { root: true })
      })
    },
    getLightsConfig ({ commit, dispatch }) {
      firebase.database().ref('lightsConfig').on('value', response => {
        commit('lightsConfig', response.val())
      }, error => {
        commit('shared/setMessage', { text: error.message, type: 'error' }, { root: true })
      })
    },
    lightsConfig ({ commit }, payload) {
      let lightsConfig = {
        ...payload,
        brightness: payload.color.a
      }

      commit('lightsConfig', lightsConfig)
      firebase.database().ref('lightsConfig').set(lightsConfig)
        .then(() => commit('shared/setMessage', {
          text: 'Lights changed successfully',
          type: 'success'
        }, { root: true }))
        .catch(error => commit('shared/setMessage', { text: error.message, type: 'error' }, { root: true }))
    },
    newAnimation ({ commit, dispatch }, payload) {
      commit('shared/clearMessage', null, { root: true })

      return new Promise((resolve, reject) => {
        firebase.database().ref('animations').push(payload)
          .then(() => {
            resolve()
            commit('shared/setMessage', {
              text: 'Animation added successfully',
              type: 'success'
            }, { root: true })
          })
          .catch(error => reject(error))
      })
    },
    updateAnimation ({ commit, dispatch }, payload) {
      commit('shared/clearMessage', null, { root: true })

      let animation = Object.assign({}, payload.animation)
      delete animation['key']

      firebase.database().ref('animations').child(payload.key).set(animation)
        .then(() => {
          commit('shared/setMessage', {
            text: 'Animation updated successfully',
            type: 'success'
          }, { root: true })
        })
        .catch(error => commit('shared/setMessage', { text: error.message, type: 'error' }, { root: true }))
    },
    deleteAnimation ({ commit, dispatch }, payload) {
      commit('shared/clearMessage', null, { root: true })

      firebase.database().ref('animations').child(payload).remove()
        .then(() => {
          commit('shared/setMessage', {
            text: 'Animation deleted successfully',
            type: 'success'
          }, { root: true })
        })
        .catch(error => commit('shared/setMessage', { text: error.message, type: 'error' }, { root: true }))
    }
  }
}
