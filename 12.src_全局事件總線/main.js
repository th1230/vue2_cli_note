// 引入vue文件(vue.runtime.esm.js)
import Vue from "vue";
// 引入App組件
import App from "./App.vue";
// 關閉vue的生產提示
Vue.config.productionTip = false;

//使用vc作為事件總線的中間人
// const Compoment = Vue.extend({});
// const Bus = new Compoment();

// Vue.prototype.$bus = Bus;

// 創建Vue實例
new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    // 將vm作為全局的事件總線，放在Vue.prototype上面
    Vue.prototype.$bus = this;
  },
});
