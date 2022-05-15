<template>
  <div class="container">
    <Category titlename="遊戲">
      <template scope="categoryData">
        <ul>
          <li v-for="(g, index) in categoryData.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category titlename="遊戲">
      <template scope="categoryData">
        <ol>
          <li v-for="(g, index) in categoryData.games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>

    <Category titlename="遊戲">
      <template slot-scope="{ games }">
        <h3 v-for="(g, index) in games" :key="index">
          {{ g }}
        </h3>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  data() {
    return {};
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
