<template>
  <div class="yellowBg">
    <h1>姓名 - {{ name }}</h1>
    <h1>年齡 - {{ age }}</h1>
  </div>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  name: "Student",
  data() {
    return {
      name: "thomas",
      age: 20,
    };
  },
  mounted() {
    // this.$bus.$on("sendMsg", (data) => {
    //   console.log("收到來自School組件的數據:" + data);
    // });

    //訂閱消息
    const token = PubSub.subscribe("sendMsg", (data) => {
      console.log("收到來自School組件的數據:" + data);
    });
  },

  beforeDestroy() {
    // this.$bus.$off("hello");

    //取消訂閱
    PubSub.unsubscribe(token);
  },
};
</script>

<style lang="scss" scoped>
.yellowBg {
  background-color: rgb(244, 239, 109);
}
</style>
