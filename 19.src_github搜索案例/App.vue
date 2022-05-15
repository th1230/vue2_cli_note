<template>
  <div class="container">
    <Search></Search>
    <List></List>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: { Search, List },
};
</script>

<style>
html,
body {
  font-size: 1.2rem;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
  overflow: hidden;
}
</style>
