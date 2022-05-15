<template>
  <div>
    <h1>人員列表</h1>
    <h1 style="color: red">Count組件的總合為{{ sum }}</h1>

    <input type="text" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addWang">添加首字為王的人</button>
    <button @click="addRandom">添加隨機人名</button>

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
      this.$store.commit("personAbout/ADD_PERSON", {
        id: nanoid(),
        name: this.name,
      });

      this.name = "";
    },
    addWang() {
      this.$store.dispatch("personAbout/addPersonWang", {
        id: nanoid(),
        name: this.name,
      });

      this.name = "";
    },

    addRandom() {
      this.$store.dispatch("personAbout/addPersonServer");
    },
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.personAbout.sum;
    },
  },
};
</script>

<style></style>
