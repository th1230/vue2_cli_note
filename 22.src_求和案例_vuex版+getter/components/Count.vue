<template>
  <div>
    <h1>當前的總合為{{ $store.state.sum }}</h1>
    <h1>當前的總合的10倍為{{ $store.getters.bigSum }}</h1>
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
