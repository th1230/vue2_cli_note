// 引入vue文件(vue.runtime.esm.js)
import Vue from "vue";
// 引入App組件
import App from "./App.vue";
// 引入vuex store
import store from "./store";
// 關閉vue的生產提示
Vue.config.productionTip = false;

// 創建Vue實例
new Vue({
  el: "#app",
  // 設定store屬性，將剛創建的store放入
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
});
