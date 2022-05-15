<template>
  <div>
    <p>消息{{ id }}</p>
    <p>消息{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"],

  data() {
    return {};
  },
};
</script>

<style></style>
