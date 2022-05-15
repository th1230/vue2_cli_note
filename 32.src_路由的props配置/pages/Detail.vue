<template>
  <div>
    <p>{{ id }}</p>
    <p>{{ title }}</p>

    <p>{{ a }}</p>
    <p>{{ b }}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title", "a", "b"],

  data() {
    return {};
  },
  computed: {
    // id() {
    //   return this.$route.params.id;
    // },
    // title() {
    //   return this.$route.params.title;
    // },
  },
};
</script>

<style></style>
