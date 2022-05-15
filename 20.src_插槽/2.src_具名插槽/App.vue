<template>
  <div class="container">
    <Category titlename="遊戲">
      <ul slot="center">
        <li v-for="(g, index) in game" :key="index">{{ g }}</li>
      </ul>

      <div slot="footer">
        <a href="https://cn.vuejs.org/">單機遊戲</a>
        <a href="https://cn.vuejs.org/">網路遊戲</a>
      </div>
    </Category>
    <Category titlename="美食">
      <img slot="center" src="./assets/beef.jpg" alt="beef" />

      <a slot="footer" href="https://cn.vuejs.org/">更多美食</a>
    </Category>
    <Category titlename="電影">
      <video slot="center" src="./assets/video.mp4" controls></video>

      <template v-slot:footer>
        <div class="filmslist">
          <a href="https://cn.vuejs.org/">熱門</a>
          <a href="https://cn.vuejs.org/">經典</a>
          <a href="https://cn.vuejs.org/">最新</a>
        </div>
        <h1>歡迎前來觀賞</h1>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  data() {
    return {
      game: ["超級瑪利歐", "魔物獵人", "遊戲王", "打彈珠"],
      foods: ["牛排", "烤肋排", "餡餅", "蛋糕"],
      films: ["蝙蝠俠", "小丑", "教父", "驚魂之夜"],
    };
  },
  methods: {},
  components: { Category },
};
</script>

<style scoped>
html,
body {
  font-size: 1.2rem;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}

a {
  margin: 0 10px;
}

.filmslist {
  display: flex;
}
h1 {
  text-align: center;
  background-color: rgb(255, 244, 35);
}
</style>
