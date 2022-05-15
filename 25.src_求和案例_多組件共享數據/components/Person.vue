<template>
  <div>
    <h1>人員列表</h1>
    <h1 style="color: red">Count組件的總合為{{ sum }}</h1>

    <input type="text" v-model="name" />
    <button @click="addPerson">添加</button>

    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  data() {
    return { name: "" };
  },
  methods: {
    addPerson() {
      this.$store.commit("ADD_PERSON", {
        id: nanoid(),
        name: this.name,
      });

      this.name = "";
    },
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    },
  },
};
</script>

<style></style>
