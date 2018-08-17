export default {
  namespaced: true,
  state: {
    name: '',
    hp: 100,
    defence: 5,
    money: 0,
  },
  mutations: {
    name(state, payload) {
      state.name = payload;
    }
  },
  actions: {}
};
