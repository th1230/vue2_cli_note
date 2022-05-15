// 由於需要調用Vue.use所以必須引入
import Vue from "vue";
// 引入Vuex模塊
import Vuex from "vuex";
//引入兩個store
import countAbout from "./countAbout";
import personAbout from "./personAbout";
// 使用Vuex插件
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    personAbout: personAbout,
    countAbout: countAbout,
  },
});
