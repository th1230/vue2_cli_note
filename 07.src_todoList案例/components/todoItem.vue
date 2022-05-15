<template>
  <div class="todoItem">
    <div class="checkboxGroup">
      <input type="checkbox" :checked="done" @click="changeCheckFuntion(id)" />
      <p class="itemName">{{ name }}</p>
    </div>
    <button class="deleteButton" @click="deleteItemFunction(id)">刪除</button>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "done", "changeCheckFuntion", "deleteItemFunction"],
};
</script>

<style scoped>
.todoItem {
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
  border: 1.5px solid rgba(74, 74, 74, 0.215);
  padding: 5px;
}

.todoItem:hover {
  background-color: rgb(193, 193, 193);
}

.todoItem .checkboxGroup {
  display: flex;
  align-items: center;
}

.todoItem .checkboxGroup p {
  padding: 0;
  margin: 0;
  margin-left: 10px;
}

.itemName {
  font-size: 1.25em;
  font-family: sans-serif;
}
.deleteButton {
  background-color: rgb(236, 81, 81);
  color: rgb(213, 255, 246);
  border-radius: 5%;
  padding: 5px 20px;
  height: 40px;
  border: none;
  transition: background-color 0.3s;
}

.deleteButton:hover {
  background-color: rgb(233, 51, 51);
  cursor: pointer;
}

.deleteButton:active {
  background-color: rgb(231, 11, 11);
  cursor: pointer;
  transform: scale(0.9);
}
</style>
