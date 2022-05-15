// 引入vue文件(vue.runtime.esm.js)
import Vue from "vue";
// 引入App組件
import App from "./App.vue";
// 引入插件
import { plugin } from "./plugin";
// 關閉vue的生產提示
Vue.config.productionTip = false;

// 加入plugin
Vue.use(plugin);

// 創建Vue實例
new Vue({
  el: "#app",
  render: (h) => h(App),
});
