<template>
  <div>
    <todoItem
      v-for="t in todo"
      :key="t.id"
      :id="t.id"
      :name="t.taskName"
      :done="t.done"
      :changeCheckFuntion="changeCheckFuntion"
      :deleteItemFunction="deleteItemFunction"
    ></todoItem>
  </div>
</template>

<script>
import todoItem from "./todoItem.vue";
export default {
  props: ["todo", "changeCheckFuntion", "deleteItemFunction"],
  components: { todoItem },
};
</script>

<style></style>
