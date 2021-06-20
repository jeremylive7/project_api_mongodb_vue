import { createStore } from 'vuex'

export default createStore({
  state: {
    state: {
        productos: []
    }
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload
    }
  },
  actions: {
    async getProductos ({ commit }) {
      try {
        const res = await fetch('')
        const data = await res.json()
        commit('setProductos', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
