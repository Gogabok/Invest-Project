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

  },
  actions: {
    
  }
}