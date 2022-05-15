<template>
  <div>
    <button @click="show = !show">顯示/隱藏</button>
    <transition name="test" appear>
      <h1 v-show="show" class="box">你好阿!</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return { show: true };
  },
};
</script>

<style scoped>
.box {
  width: 300px;
  height: 150px;
  background-color: orange;
}

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
