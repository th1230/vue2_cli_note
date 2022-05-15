<template>
  <div>
    <Test></Test>
    <Test2></Test2>
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    Test,
    Test2,
  },
};
</script>

<style>
html,
body {
  font-size: 1.2rem;
}
</style>
