<template>
  <div class="yellowBg">
    <h1>我是一位學生</h1>
    <h1>姓名 - {{ name }}</h1>
    <h1>地址 - {{ address }}</h1>
    <h1>年齡age - {{ age }}</h1>
    <h1>年齡myAge - {{ myAge }}</h1>
    <button @click="updateAge">年齡加1</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      myAge: this.age,
    };
  },

  methods: {
    updateAge() {
      this.myAge++;
    },
  },

  //簡單接收
  // props: ["name", "address", "age"],

  // 接收的同時對類型進行限制
  /*   props: {
    name: String,
    address: String,
    age: Number,
  }, */

  props: {
    name: {
      type: String, // name的類型必須為String
      required: true, // name是必要的
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 10, // 默認值
    },
  },
};
</script>

<style>
.yellowBg {
  background-color: rgb(244, 239, 109);
}
</style>
