import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Message from "../pages/Message.vue";
import News from "../pages/News.vue";
import Detail from "../pages/Detail.vue";

const router = new VueRouter({
  routes: [
    {
      name: "homeTag",
      path: "/home",
      component: Home,
      meta: {
        title: "首頁",
        isAuth: true,
      },
      children: [
        {
          name: "messageTag",
          path: "message",
          component: Message,
          meta: {
            title: "消息",
            isAuth: true,
          },
          children: [
            {
              name: "detailTag",
              path: "detail",
              component: Detail,
              meta: {
                title: "詳情",
                isAuth: true,
              },
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                };
              },
            },
          ],
        },
        {
          name: "newsTag",
          path: "news",
          component: News,
          meta: {
            title: "新聞",
            isAuth: true,
          },
          // 獨享路由守衛，沒有獨享後置路由守衛，要使用後置路由守衛只能透過全局後置路由守衛
          beforeEnter(to, from, next) {
            if (localStorage.getItem("mission") == "讓你過") {
              alert("放行");
              next();
            } else {
              alert("禁止通過");
            }
          },
        },
      ],
    },
    {
      path: "/about",
      component: About,
      meta: {
        title: "關於",
        isAuth: true,
      },
    },
  ],
});

// 全局前置路由守衛ᅳᅳ初始化的時候被調用、每次路由切換前調用
// router.beforeEach((to, from, next) => {
//   // 可以使用route中配置屬性meta來自定義一些屬性
//   if (
//     (to.meta.isAuth && to.name == "newsTag") ||
//     (to.meta.isAuth && to.name == "messageTag")
//   ) {
//     if (localStorage.getItem("mission") == "讓你過") {
//       alert("放行");
//       next();
//     } else {
//       alert("禁止通過");
//     }
//   } else {
//     next();
//   }
// });

// 全局後置路由守衛ᅳᅳ初始化的時候被調用、每次路由切換後調用
// router.afterEach((to, from) => {
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   } else {
//     document.title = "Vue_test";
//   }
// });

export default router;
