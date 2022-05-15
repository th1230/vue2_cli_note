<template>
  <div class="outerContainer">
    <h1>任務列表</h1>
    <input
      type="text"
      placeholder="請輸入任務名稱"
      v-model="inputtext"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script>
export default {
  data() {
    return { inputtext: "" };
  },
  methods: {
    addItem() {
      this.addItemFunction(this.inputtext);
      this.inputtext = "";
    },
  },
  props: ["addItemFunction"],
};
</script>

<style scoped>
.outerContainer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-size: 2rem;
  margin: 0;
  padding: 0;
}

input {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  font-size: 1.25rem;
  margin-bottom: 20px;
  padding: 5px 10px;
  border: 2px solid rgb(105, 105, 105);
}
</style>
