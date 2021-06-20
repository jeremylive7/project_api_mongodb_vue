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
        const res = await fetch('https://raw.githubusercontent.com/livelivelive007/project_api_mongodb_vue/master/src/store/dbmongo.json?token=ADIUESO4KGTVER53YZP2QO3AZ53ZU')
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
