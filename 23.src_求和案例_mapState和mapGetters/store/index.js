// 由於需要調用Vue.use所以必須引入
import Vue from "vue";
// 引入Vuex模塊
import Vuex from "vuex";
// 使用Vuex插件
Vue.use(Vuex);

// 輸出一個Vuex Store，因為要調用Vuex.Store()構造函數，所以要先執行Vue.use(Vuex);
export default new Vuex.Store({
  //準備actions對象——響應組件中用戶的動作
  actions: {
    add(context, value) {
      const { commit } = context;
      commit("ADD", value);
    },
    // 使用解構附值獲得context中的commit
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
  //準備mutations對象——修改state中的數據
  mutations: {
    ADD(state, value) {
      state.sum += value;
    },
    REDUCE(state, value) {
      state.sum -= value;
    },
  },
  //準備state對象——保存具體的數據
  state: {
    sum: 0,
    school: "Vue",
    subject: "前端",
  },

  //準備一個getters——用於將特定的數據進行加工
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
});
