<template>
  <div class="yellowBg">
    <h1>姓名 - {{ name }}</h1>
    <h1>年齡 - {{ age }}</h1>
    <h1>number - {{ number }}</h1>
    <button @click="sendName">傳遞名稱</button>
    <button @click="sayHello">對App說hello</button>
    <button @click="addNumber">number+1</button>

    <button @click="unbind">解綁事件</button>
    <button @click="death">消毀組件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "thomas",
      age: 20,
      number: 0,
    };
  },
  methods: {
    sendName() {
      this.$emit("sendName", this.name);
    },
    addNumber() {
      console.log("addNumber回掉被調用了", this.number);
      this.number++;
    },
    sayHello() {
      this.$emit("hello");
    },
    unbind() {
      console.log("解除綁定");
      // this.$off("sendName"); //解綁一個自定義事件
      // this.$off(["sendName", "hello"]); //解綁多個自定義事件
      this.$off(); //解綁所有定義事件
    },
    death() {
      // 銷毀當前的組件實例，銷毀後所走Student的自定義事件全部不奏效。
      this.$destroy();
    },
  },
};
</script>

<style lang="scss" scoped>
.yellowBg {
  background-color: rgb(244, 239, 109);
}
</style>
