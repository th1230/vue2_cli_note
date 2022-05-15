import { mixin } from "./mixin";

export const plugin = {
  install(Vue) {
    // 1. 全局過濾器
    Vue.filter("slice", function (value, a, b) {
      return value.slice(a, b);
    });

    // 2. 全局指令
    Vue.directive("fbind", {
      bind(element, binding) {
        console.log("bind");
        element.value = binding.value;
      },
      inserted(element, binding) {
        console.log("inserted");
        element.focus();
      },
      update(element, binding) {
        console.log("update");
      },
    });

    // 3. 全局mixin
    Vue.mixin(mixin);

    //4. 添加實例方法
    Vue.prototype.sayhi = function () {
      console.log("hi !!!");
    };

    Vue.prototype.x = 999;
  },
};
