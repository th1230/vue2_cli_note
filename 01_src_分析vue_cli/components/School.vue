<template>
  <div class="yellowBg">
    <h1>學校名稱 - {{ schoolName }}</h1>
    <h1>學校地址 - {{ schoolAddress }}</h1>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "淡江大學",
      schoolAddress: "台北",
    };
  },
};
</script>

<style>
.yellowBg {
  background-color: rgb(244, 239, 109);
}
</style>
