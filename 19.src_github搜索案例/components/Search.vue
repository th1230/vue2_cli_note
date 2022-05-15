<template>
  <div class="Search">
    <label for="inputName">請輸入想搜尋的github用戶名</label>
    <div class="inputgroup">
      <input id="inputName" type="text" v-model="inputname" />
      <button @click="getUsers">發送請求</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return { inputname: "" };
  },
  methods: {
    getUsers() {
      if (!this.inputname) {
        return alert("輸入不可為空");
      }

      // 修改狀態為loading
      this.$bus.$emit("getUsers", {
        isFirst: false,
        isLoading: true,
        errorMsg: "",
        data: [],
      });

      axios
        .get(`https://api.github.com/search/repositories?q=${this.inputname}`)
        .then(
          (res) => {
            // 返回或取得data
            this.$bus.$emit("getUsers", {
              isFirst: false,
              isLoading: false,
              errorMsg: "",
              users: res.data.items,
            });
          },
          (e) => {
            // 修改狀態為error
            this.$bus.$emit("getUsers", {
              isFirst: false,
              isLoading: false,
              errorMsg: e,
              users: [],
            });
          }
        );
    },
  },
};
</script>

<style>
.Search {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.Search label {
  font-size: 2rem;
  margin: 20px 0;
  font-weight: 700;
}

.Search .inputgroup {
  width: 80%;
  display: flex;
}

.Search .inputgroup input[type="text"] {
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  font-size: 1.5rem;
  flex-shrink: 1;
  font-weight: 600;
}

.Search .inputgroup button {
  width: 100px;
  height: 30px;
  margin-left: 10px;
  background-color: rgb(241, 207, 128);
  border: none;
  box-shadow: 0px 0px 5px 2px rgba(95, 95, 95, 0.611);
  transition: 0.5s;
  font-weight: 600;
}

.Search .inputgroup button:active {
  box-shadow: none;
}
</style>
