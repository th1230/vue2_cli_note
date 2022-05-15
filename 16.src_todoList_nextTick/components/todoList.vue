<template>
  <div>
    <todoItem v-for="todo in tododata" :key="todo.id" :todo="todo"></todoItem>
  </div>
</template>

<script>
import todoItem from "./todoItem.vue";
export default {
  props: ["tododata"],
  components: { todoItem },
};
</script>

<style></style>
