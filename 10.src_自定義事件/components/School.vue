<template>
  <div class="yellowBg">
    <h1>學校名稱 - {{ name }}</h1>
    <h1>學校地址 - {{ address }}</h1>
    <button @click="getStudentName(name)">傳遞名稱</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "淡江",
      address: "台北",
    };
  },
  props: ["getStudentName"],
};
</script>

<style scoped>
.yellowBg {
  background-color: rgb(244, 239, 109);
}
</style>
