<template>
  <div>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: { Count },
};
</script>

<style scoped>
html,
body {
  font-size: 1.2rem;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
</style>
