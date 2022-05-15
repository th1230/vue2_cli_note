<template>
  <div>
    <h1>當前的總合為{{ sum }}</h1>
    <h1>我在{{ school }}學習{{ subject }}</h1>
    <h1>當前的總合的10倍為{{ bigSum }}</h1>

    <h1 style="color: blue">Person組件總人數: {{ personList.length }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- 使用mapMutations和mapActions時如果有傳參數，需要再調用時先傳，否則會傳入event -->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">odd +1</button>
    <button @click="incrementWait(n)">wait +1</button>
  </div>
</template>

<script>
// 引入 mapState 和 mapGetters 函數
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    //靠 mapMutations 生成：increment、decrement（對象寫法）
    ...mapMutations("countAbout", { increment: "ADD", decrement: "REDUCE" }),

    //靠mapActions生成：incrementOdd、incrementWait（對象寫法）
    ...mapActions("countAbout", {
      incrementOdd: "addOdd",
      incrementWait: "addWait",
    }),
  },
  computed: {
    // 借助mapState生成計算屬性，從state中讀取數據。(對象寫法)
    ...mapState("countAbout", {
      sum: "sum",
      school: "school",
      subject: "subject",
    }),

    ...mapState("personAbout", {
      personList: "personList",
    }),

    // 借助mapGetters生成計算屬性，從getters中讀取數據，當getters值與函數名稱一樣時可以使用。(數組寫法)
    ...mapGetters("countAbout", ["bigSum"]),
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>
