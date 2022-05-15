<template>
  <div>
    <todoItem
      v-for="t in todo"
      :key="t.id"
      :id="t.id"
      :name="t.taskName"
      :done="t.done"
    ></todoItem>
  </div>
</template>

<script>
import todoItem from "./todoItem.vue";
export default {
  props: ["todo"],
  components: { todoItem },
};
</script>

<style></style>
