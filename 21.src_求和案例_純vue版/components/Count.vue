<template>
  <div>
    <h1>當前的總合為{{ sum }}</h1>
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
      sum: 0,
      n: 1,
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += 1;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += 1;
      }, 500);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>
