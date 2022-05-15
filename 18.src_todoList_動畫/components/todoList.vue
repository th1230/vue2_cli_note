<template>
  <div>
    <transition-group name="test">
      <todoItem v-for="todo in tododata" :key="todo.id" :todo="todo"></todoItem>
    </transition-group>
  </div>
</template>

<script>
import todoItem from "./todoItem.vue";
export default {
  props: ["tododata"],
  components: { todoItem },
};
</script>

<style>
.test-enter-active {
  animation: come 0.5s;
}

.test-leave-active {
  animation: come 0.5s reverse;
}

@keyframes come {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
