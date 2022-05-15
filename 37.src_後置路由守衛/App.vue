<template>
  <div class="container m-5">
    <div class="row justify-content-center mb-5">
      <Banner />
    </div>

    <div class="row justify-content-around">
      <div class="col-offset-2 col-2">
        <div class="list-group">
          <!-- <a href="#" class="list-group-item active">About</a>
          <a href="#" class="list-group-item">Home</a> -->

          <!-- 借助vue-router中的router-link實現路由切換 -->
          <router-link
            class="list-group-item"
            active-class="active"
            :to="{ name: 'homeTag' }"
            >Home</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
        </div>
      </div>

      <div class="col-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 組件呈現的位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./pages/Home";
import About from "./pages/About";
import Banner from "./components/Banner";

export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    localStorage.setItem("mission", "讓你過");
  },
  components: { Home, About, Banner },
};
</script>
