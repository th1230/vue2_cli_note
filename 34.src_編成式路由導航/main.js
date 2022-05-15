// 引入vue文件(vue.runtime.esm.js)
import Vue from "vue";
// 引入vueRouter
import VueRouter from "vue-router";
// 引入App組件
import App from "./App.vue";
//引入router
import router from "./router";

// 關閉vue的生產提示
Vue.config.productionTip = false;

// 使用vueRouter插件
Vue.use(VueRouter);

// 創建Vue實例
new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App),
});
