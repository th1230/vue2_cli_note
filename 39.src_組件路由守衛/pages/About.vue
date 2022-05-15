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

  beforeRouteEnter(to, from, next) {
    // 通過路由規則即將進入該組件時調用
    if (localStorage.getItem("mission") == "讓你過") {
      alert("放行");
      next();
    } else {
      alert("禁止通過");
    }
  },
  beforeRouteLeave(to, from, next) {
    // 通過路由規則即將離開該組件時調用
    if (confirm("是否要離開此組件")) {
      next();
    }
  },

  beforeDestroy() {
    console.log("About組件即將銷毀");
  },
};
</script>

<style></style>
