<template>
  <div class="container m-5">
    <div class="row justify-content-center mb-5">
      <div class="col-offset-2 col-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>

    <div class="row justify-content-around">
      <div class="col-offset-2 col-2">
        <div class="list-group">
          <!-- <a href="#" class="list-group-item active">About</a>
          <a href="#" class="list-group-item">Home</a> -->

          <!-- 借助vue-router中的router-link實現路由切換 -->
          <router-link class="list-group-item" active-class="active" to="/home"
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
import Home from "./components/Home";
import About from "./components/About";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: { Home, About },
};
</script>
