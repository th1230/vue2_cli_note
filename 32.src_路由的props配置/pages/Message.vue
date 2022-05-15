<template>
  <div>
    <ul>
      <li v-for="mes in messageList" :key="mes.id">
        <router-link
          :to="{
            name: 'detailTag',
            query: {
              id: mes.id,
              title: mes.title,
            },
          }"
          >message{{ mes.id }} </router-link
        >&nbsp;&nbsp;
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
};
</script>
