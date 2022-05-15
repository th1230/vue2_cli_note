<template>
  <div>
    <h1>Home組件內容</h1>
    <div>
      <ul class="nav nav-tab">
        <li class="list-group-item">
          <router-link to="/home/news">home-news</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/home/message">home-news</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("Home組件已經掛載", this);
    //證明router是同一個，route對應的是當前組件

    window.homeRouter = this.$router;
    window.homeRoute = this.$route;
  },

  beforeDestroy() {
    console.log("Home組件即將銷毀");
  },
};
</script>

<style></style>
