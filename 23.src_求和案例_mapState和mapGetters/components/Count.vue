<template>
  <div>
    <h1>當前的總合為{{ sum }}</h1>
    <h1>我在{{ school }}學習{{ subject }}</h1>
    <h1>當前的總合的10倍為{{ bigSum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">odd +1</button>
    <button @click="incrementWait">wait +1</button>
  </div>
</template>

<script>
// 引入 mapState 和 mapGetters 函數
import { mapState, mapGetters } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
      this.$store.commit("ADD", this.n);
    },
    decrement() {
      this.$store.commit("REDUCE", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("addOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("addWait", this.n);
    },
  },
  computed: {
    // 手寫computed
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    // 借助mapState生成計算屬性，從state中讀取數據。(對象寫法)
    ...mapState({ sum: "sum", school: "school", subject: "subject" }),

    // 借助mapState生成計算屬性，從state中讀取數據，當state值與函數名稱一樣時可以使用。(數組寫法)
    // ...mapState(["sum", "school", "subject"]),

    /* ********************************************* */

    // 借助mapGetters生成計算屬性，從getters中讀取數據，當getters值與函數名稱一樣時可以使用。(數組寫法)
    ...mapGetters(["bigSum"]),
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
