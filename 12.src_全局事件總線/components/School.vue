<template>
  <div class="yellowBg">
    <h1>學校名稱 - {{ name }}</h1>
    <h1>學校地址 - {{ address }}</h1>
    <button @click="sendmsg">發送訊息</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "淡江",
      address: "台北",
    };
  },

  methods: {
    sendmsg() {
      this.$bus.$emit("sendMsg", "請到" + this.name + "拿成績單");
    },
  },
};
</script>

<style scoped>
.yellowBg {
  background-color: rgb(244, 239, 109);
}
</style>
