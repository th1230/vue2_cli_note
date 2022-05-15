<template>
  <div>
    <!-- 通過父組件給子組件傳遞函數類型的prop實現: 子給父傳遞數據 -->
    <School :getStudentName="getStudentName"></School>
    <!-- 通過父組件給子組件綁定一個自定義事件實現: 子給父傳遞數據(第一種寫法，使用 @ 或 v-on ) -->
    <Student @sendName="getStudentName" @hello="sayhello"></Student>
    <!-- 通過父組件給子組件綁定一個自定義事件實現: 子給父傳遞數據(第二種寫法，使用 ref )-->
    <!-- 在子組件上設定的事件Vue預設會把它當作子組件本身的事件，只能透過子組件觸發，但是如果想使用原生的事件可以透過native屬性，將該事件該為原生事件，這樣就不需要透過子組件觸發該事件 -->
    <Student ref="sch" @click.native="show"></Student>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    getStudentName(name, ...params) {
      console.log(name);
    },
    getSchoolName(name, ...params) {
      console.log(name);
    },
    sayhello() {
      console.log("hello");
    },
    show() {
      console.log("哈哈");
    },
  },
  components: {
    School,
    Student,
  },
  mounted() {
    this.$refs.sch.$on("sendName", this.getStudentName); //綁定自定義事件
    // this.$refs.sch.$once("sendName", this.getStudentName); //綁定自定義事件(一次性)
  },
};
</script>

<style>
html,
body {
  font-size: 1.1rem;
}

.blueBg {
  background-color: rgb(25, 125, 238);
  padding: 20px;
}
</style>
