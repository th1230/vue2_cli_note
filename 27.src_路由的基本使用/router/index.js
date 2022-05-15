import VueRouter from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

export default router;
