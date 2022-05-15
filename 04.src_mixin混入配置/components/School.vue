<template>
  <div class="yellowBg">
    <h1 @click="showName">學校名稱 - {{ name }}</h1>
    <h1>學校地址 - {{ address }}</h1>
  </div>
</template>

<script>
import { mixin } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "淡江",
      address: "台北",
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
