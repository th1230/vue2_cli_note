<template>
  <div>
    <p>{{ id }}</p>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",

  data() {
    return {};
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    title() {
      return this.$route.query.title;
    },
  },
};
</script>

<style></style>
