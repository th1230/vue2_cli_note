<template>
  <div>
    <button @click="show = !show">顯示/隱藏</button>
    <transition name="hello" appear>
      <h1 v-show="show" class="box">你好阿!</h1>
    </transition>

    <!-- <transition-group name="hello" appear>
      <h1 v-show="!show" class="box" key="1">你好阿 ----1</h1>
      <h1 v-show="show" class="box" key="2">你好阿 ----2</h1>
    </transition-group> -->
  </div>
</template>

<script>
export default {
  name: "Test2",
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

  /* transition: all 0.5s; */
}

/* 進入的起點，離開的終點 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

/* 進入得過程，離開得過程 */
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s;
}

/* 進入的終點，離開得起點 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0%);
}
</style>
