<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
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
