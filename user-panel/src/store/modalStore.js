// Вынесение логики работы модальных окон в отдельный стор, 
// который будет конролировать работу модалок
export default {
  namespaced: true,
  state: {
    modals: [],
    codes: {
      email: false,
      phone: false, 
      emailTwoFa: false,
      phoneTwoFa: false,
      emailInstructions: false
    }
  },
  getters: {
    modals (state) {
      return state.modals
    },
    codes (state) {
      return state.codes
    }
  },
  mutations: {
    addModal(state, payload) {
      state.modals.push(
        {
          component: payload.link,
          subModal: payload.sublink,
          infoCodeVerification: payload.info,
          message: payload.message
        }
      )
    },
    deleteModal(state, payload) {
      state.modals.splice(payload.index, 1)
    },
    deleteAllModals (state) {
      state.modals.splice(0, state.modals.length)
    },
    codeValidation (state, payload) {
      state.codes[payload.info.input] = payload
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
    },
    SUCCESS_CODE_VALIDATION ({ commit }, payload) {
      commit('codeValidation', payload)
    }
  }
}