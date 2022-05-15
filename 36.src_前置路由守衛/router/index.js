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
      children: [
        {
          name: "messageTag",
          path: "message",
          component: Message,
          children: [
            {
              name: "detailTag",
              path: "detail",
              component: Detail,
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
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

// 全局前置路由守衛ᅳᅳ初始化的時候被調用、每次路由切換時調用
router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.name == "messageTag" || to.name == "newsTag") {
    if (localStorage.getItem("mission") == "讓你過") {
      alert("放行");
      next();
    } else {
      alert("禁止通過");
    }
  } else {
    next();
  }
});

export default router;
