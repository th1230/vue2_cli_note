<template>
  <div class="col-offset-2 col-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="forward()">前進</button>
    <button @click="back()">後退</button>
    <button @click="go">go測試</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    forward() {
      this.$router.forward();
    },
    back() {
      this.$router.back();
    },
    go() {
      this.$router.go(2);
    },
  },
};
</script>

<style></style>
