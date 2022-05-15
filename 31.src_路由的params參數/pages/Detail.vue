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
      return this.$route.params.id;
    },
    title() {
      return this.$route.params.title;
    },
  },
};
</script>

<style></style>
