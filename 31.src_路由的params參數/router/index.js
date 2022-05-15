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
              path: "detail/:id/:title", //使用佔位符聲明接收params參數
              component: Detail,
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
