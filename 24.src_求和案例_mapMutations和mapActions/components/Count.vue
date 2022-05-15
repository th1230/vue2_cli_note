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
    // 手寫調用mutations中的方法與actions中的方法
    /*
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
    */

    //靠 mapMutations 生成：increment、decrement（對象寫法）
    ...mapMutations({ increment: "ADD", decrement: "REDUCE" }),

    //靠 mapMutations 生成：JIA、JIAN（數組寫法）
    // ...mapMutations(["ADD", "REDUCE"]),

    /* ********************************* */

    //靠mapActions生成：incrementOdd、incrementWait（對象寫法）
    ...mapActions({ incrementOdd: "addOdd", incrementWait: "addWait" }),

    //靠mapActions生成：incrementOdd、incrementWait（數組寫法）
    // ...mapActions(["addOdd", "addWait"]),
  },
  computed: {
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
