<template>
  <div>
    <h1 class="fs-1">這是About組件</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log("About組件已經掛載", this);
    //證明router是同一個，route對應的是當前組件

    window.aboutRouter = this.$router;
    window.aboutRoute = this.$route;
  },

  beforeDestroy() {
    console.log("About組件即將銷毀");
  },
};
</script>

<style></style>
