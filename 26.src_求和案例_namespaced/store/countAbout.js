export default {
  //開啟命名空間
  namespaced: true,
  actions: {
    add(context, value) {
      const { commit } = context;
      commit("ADD", value);
    },
    reduce({ commit }, value) {
      commit("REDUCE", value);
    },
    addOdd({ commit, state }, value) {
      if (state.sum % 2) {
        commit("ADD", value);
      }
    },
    addWait({ commit }, value) {
      setTimeout(() => {
        commit("ADD", value);
      }, 500);
    },
  },
  mutations: {
    ADD(state, value) {
      state.sum += value;
    },
    REDUCE(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "Vue",
    subject: "前端",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};
