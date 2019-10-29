export default {
  namespaced: true,
  state: {
    loading: false,
    message: null
  },
  getters: {
    message (state) {
      return state.message
    }
  },
  mutations: {
    loading (state, payload) {
      state.loading = payload
    },
    setMessage (state, payload) {
      state.message = payload
    },
    clearMessage (state) {
      state.message = null
    }
  },
  actions: {
    clearMessage ({ commit }) {
      commit('clearMessage')
    }
  }
}
