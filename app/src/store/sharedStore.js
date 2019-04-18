export default {
  state: {
    loading: false,
    message: null
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
