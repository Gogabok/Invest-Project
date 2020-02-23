// Вынесение логики работы модальных окон в отдельный стор, 
// который будет конролировать работу модалок
export default {
  namespaced: true,
  state: {
    modals: []
  },
  getters: {
    modals (state) {
      return state.modals
    }
  },
  mutations: {
    addModal(state, payload) {
      state.modals.push(
        {
          component: payload.link
        }
      )
    },
    deleteModal(state, payload) {
      state.modals.splice(payload.index, 1)
    },
    deleteAllModals (state) {
      state.modals.splice(0, state.modals.length)
    }
  },
  actions: {
    ADD_MODAL({ commit }, payload) {
      commit('addModal', payload)
    },
    DELETE_MODAL ({commit}, payload) {
      commit("deleteModal", payload)
    },
    DELETE_ALL_MODALS({ commit }) {
      commit("deleteAllModals")
    }
  }
}