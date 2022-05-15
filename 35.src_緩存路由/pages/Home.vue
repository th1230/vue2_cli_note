<template>
  <div>
    <h1>Home組件內容</h1>
    <div>
      <ul class="nav nav-tab">
        <li class="list-group-item">
          <router-link to="/home/news">home-news</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/home/message">home-message</router-link>
        </li>
      </ul>

      <!-- 設定include指定要緩存的組件式News組件，Message組件不會緩存，假如未設定代表keep-alive中的所有組件都會緩存 -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
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
