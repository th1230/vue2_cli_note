<template>
  <div class="greenBg">
    <h1>學生名稱 - {{ studentName }}</h1>
    <h1>學生年齡 - {{ studentAge }}</h1>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      studentName: "thomas",
      studentAge: "22",
    };
  },
};
</script>

<style>
.greenBg {
  background-color: rgb(32, 228, 133);
}
</style>
