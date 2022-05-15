<template>
  <div>
    <ul>
      <!-- 跳轉並協帶params參數，to的物件寫法 -->
      <li v-for="mes in messageList" :key="mes.id">
        <router-link
          :to="{
            name: 'detailTag',
            query: {
              id: mes.id,
              title: mes.title,
            },
          }"
          >消息message{{ mes.id }} </router-link
        >&nbsp;&nbsp;
        <button @click="pushShow(mes)">push查看</button>
        <button @click="replaceShow(mes)">replace查看</button>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "001mes" },
        { id: "002", title: "002mes" },
        { id: "003", title: "003mes" },
      ],
    };
  },
  methods: {
    pushShow(mes) {
      console.log(this.$router);
      this.$router.push({
        name: "detailTag",
        query: {
          id: mes.id,
          title: mes.title,
        },
      });
    },

    replaceShow(mes) {
      this.$router.replace({
        name: "detailTag",
        query: {
          id: mes.id,
          title: mes.title,
        },
      });
    },
  },

  beforeDestroy() {
    console.log("message組件即將銷毀");
  },
};
</script>
