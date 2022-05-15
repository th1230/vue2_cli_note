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
          path: "message",
          component: Message,
          children: [
            {
              name: "detailTag",
              path: "detail", //使用佔位符聲明接收params參數
              component: Detail,
              // 第一種寫法: prop值為對象，該隊向所有的key-value的組合最終都會透過prop傳給Detail
              // props: {
              //   a: 1,
              //   b: 2,
              // },

              // 第二種寫法: prop值為boolean值，boolean值為true，則將所有接收到的params通過prop傳給Detail
              // props: true,

              // 第三種寫法: prop值為函數，該函數返回一個對象，其中則所有的key-value的組合最終都會透過prop傳給Detail，並且可以獲得當前route
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                  a: 1,
                  b: "hello",
                };
              },
            },
          ],
        },
        {
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

export default router;
