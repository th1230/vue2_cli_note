// 引入vue文件(vue.runtime.esm.js)
import Vue from "vue";
// 引入App組件
import App from "./App.vue";
// 關閉vue的生產提示
Vue.config.productionTip = false;

// 創建Vue實例
new Vue({
  el: "#app",
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
});
