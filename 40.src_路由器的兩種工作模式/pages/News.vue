<template>
  <ul>
    <li><input type="text" /></li>
    <li><input type="text" /></li>
    <li><input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  beforeDestroy() {
    console.log("news組件即將銷毀");
  },
};
</script>
