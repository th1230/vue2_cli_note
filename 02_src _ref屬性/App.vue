<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">點擊輸出dom元素</button>
    <School id="sch" ref="sch"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "hellow",
    };
  },
  methods: {
    showDOM() {
      // School組件通過原生的getElementById獲取到的是真實DOM元素節點，只有原生的屬性和方法。
      console.log(document.getElementById("sch"));

      // School組件通過$ref獲取到的是School組件的實例物件，擁有該組建的一切對應屬性和方法。
      console.log(this.$refs.sch);
    },
  },
  components: {
    School,
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
