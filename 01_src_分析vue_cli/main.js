// 引入vue文件(vue.runtime.esm.js)
import Vue from "vue";
// 引入App組件
import App from "./App.vue";
// 關閉vue的生產提示
Vue.config.productionTip = false;

new Vue({
  //使用render函數接取createElement函數，並用此函數創建App組件並放置到#app容器中
  render: (h) => h(App),
}).$mount("#app");
