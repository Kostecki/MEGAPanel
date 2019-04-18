import firebase from 'firebase/app'
import 'firebase/database'

export default {
  state: {
    animations: null,
    lightsConfig: {
      animation: 'solid',
      color: {
        r: 255,
        g: 0,
        b: 0,
        a: 0.5
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
    lightsConfig ({ commit }, payload) {
      let lightsConfig = {
        ...payload,
        brightness: payload.color.a
      }
      // TODO: POST to API
      console.log(payload)
      commit('lightsConfig', lightsConfig)
    },
    addNewAnimation ({ commit, dispatch }, payload) {
      commit('clearMessage')

      return new Promise((resolve, reject) => {
        firebase.database().ref('animations').push(payload)
          .then(() => {
            resolve()
            dispatch('animations')
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
          dispatch('animations')
          commit('setMessage', {
            text: 'Animation updated successfully',
            type: 'success'
          })
        })
        .catch(error => {
          commit('setMessage', { text: error.message, type: 'error' })
        })
    },
    deleteAnimation ({ commit, dispatch }, payload) {
      commit('clearMessage')

      firebase.database().ref('animations').child(payload).remove()
        .then(() => {
          dispatch('animations')
          commit('setMessage', {
            text: 'Animation deleted successfully',
            type: 'success'
          })
        })
        .catch(error => {
          commit('setMessage', { text: error.message, type: 'error' })
        })
    }
  }
}
