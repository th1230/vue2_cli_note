<template>
  <div class="yellowBg">
    <h1>姓名 - {{ name }}</h1>
    <h1>年齡 - {{ age }}</h1>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "thomas",
      age: 20,
    };
  },
};
</script>

<style lang="scss" scoped>
.yellowBg {
  background-color: rgb(244, 239, 109);
}
</style>
