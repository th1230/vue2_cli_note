<template>
  <div class="category">
    <h1>{{ titlename }}</h1>
    <!-- 定義一個插槽，等待組件使用者進行填充 -->
    <slot :games="games"
      >我是一些默認值，當使用者沒有傳遞具體結構時我會出現</slot
    >
  </div>
</template>

<script>
export default {
  props: ["titlename"],
  data() {
    return { games: ["超級瑪利歐", "魔物獵人", "遊戲王", "打彈珠"] };
  },
};
</script>

<style>
.category {
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: orange;
  margin: 0 30px;
  padding: 10px;
}

h1 {
  background-color: lightblue;
  text-align: center;
}

img {
  width: 100%;
  object-fit: contain;
}

video {
  width: 100%;
  height: 200px;
}

ul li {
  padding: 0;
  margin: 0;
}
</style>
