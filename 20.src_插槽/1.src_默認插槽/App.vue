<template>
  <div class="container">
    <Category titlename="遊戲">
      <ul v-for="(g, index) in game" :key="index">
        <li>{{ g }}</li>
      </ul>
    </Category>
    <Category titlename="美食">
      <img src="./assets/beef.jpg" alt="beef" />
    </Category>
    <Category titlename="電影">
      <video src="./assets/video.mp4" controls></video>
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

<style>
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
</style>
