<template>
  <div>
    <School name="李四" :age="20" address="台南"></School>
    <School name="王五" :age="25" address="台中"></School>
    <School name="張三" :age="18" address="台北"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "hellow",
    };
  },
  methods: {},
  components: {
    School,
  },
};
</script>

<style>
html,
body {
  font-size: 1.2rem;
}

.blueBg {
  background-color: rgb(25, 125, 238);
  padding: 20px;
}
</style>
