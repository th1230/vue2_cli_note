<template>
  <div class="yellowBg">
    <h1 @click="showName">姓名 - {{ name }}</h1>
    <h1>年齡 - {{ age }}</h1>
  </div>
</template>

<script>
import { mixin } from "../mixin";

export default {
  name: "Student",
  data() {
    return {
      name: "張三",
      age: 18,
    };
  },
  //局部mixin
  mixins: [mixin],
};
</script>

<style>
.yellowBg {
  background-color: rgb(244, 239, 109);
}
</style>
