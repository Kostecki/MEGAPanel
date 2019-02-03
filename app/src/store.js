import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    user: {
      id: 1,
      role: 1
    }
  },
  getters: {
    lightsConf (state) {
      return state.lightsConf
    }
  },
  mutations: {
    updateLightsConf (state, payload) {
      state.lightsConf = payload
    }
  },
  actions: {
    updateLightsConf ({ commit }, payload) {
      let lightsConf = payload
      lightsConf['brightness'] = payload.color.a
      // TODO: POST to API)
      commit('updateLightsConf', lightsConf)
    }
  }
})
