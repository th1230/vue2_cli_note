<template>
  <div>
    <!-- 展示用戶列表 -->
    <div class="List">
      <div class="card" v-for="user in info.users" :key="user.id">
        <img class="avator" :src="user.owner.avatar_url" alt="" />
        <p class="name">{{ user.name }}</p>
      </div>
    </div>

    <!-- 展示歡迎詞 -->
    <h1 v-show="info.isFirst">歡迎使用!</h1>

    <!-- 展示加載中 -->
    <h1 v-show="info.isLoading">正在載入中...</h1>

    <!-- 展示錯誤訊息 -->
    <h1 v-show="info.errorMsg">{{ info.errorMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errorMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("getUsers", (data) => {
      this.info = { ...this.info, ...data };
    });
  },
};
</script>

<style>
.List {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  margin: 0 2.5%;
}

.card .avator {
  width: 100%;
}
</style>
