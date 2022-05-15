<template>
  <div class="container">
    <todoHeader @addItemFunction="addItem"></todoHeader>
    <todoList :todo="tododata"></todoList>
    <todoFooter
      :todo="tododata"
      @deleteAllDoneItem="deleteAllDoneItem"
      @changeAllCheckedType="changeAllCheckedType"
    ></todoFooter>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import PubSub from "pubsub-js";

import todoHeader from "./components/todoHeader.vue";
import todoList from "./components/todoList.vue";
import todoFooter from "./components/todoFooter.vue";

export default {
  name: "App",
  data() {
    return {
      tododata: [],
    };
  },
  watch: {
    tododata: {
      deep: true,
      handler(value) {
        localStorage.setItem("tododata", JSON.stringify(value));
      },
    },
  },
  methods: {
    addItem(taskText) {
      this.tododata.push({
        id: nanoid(),
        taskName: taskText,
        done: false,
      });
    },
    changeCheckedType(_, id) {
      console.log(id);
      this.tododata.forEach((i) => {
        if (i.id == id) {
          i.done = !i.done;
        }
        return;
      });
    },

    changeAllCheckedType(bool) {
      if (bool) {
        this.tododata.forEach((t) => {
          t.done = true;
        });
      } else {
        this.tododata.forEach((t) => {
          t.done = false;
        });
      }
    },

    deleteItem(_, id) {
      this.tododata = this.tododata.filter((i) => {
        return i.id != id;
      });
    },

    deleteAllDoneItem() {
      this.tododata = this.tododata.filter((t) => {
        return !t.done;
      });
    },
  },
  mounted() {
    if (!localStorage.getItem("tododata")) {
      return;
    }
    this.tododata = JSON.parse(localStorage.getItem("tododata"));

    // this.$bus.$on("changeChecked", this.changeCheckedType);
    // this.$bus.$on("deleteItem", this.deleteItem);

    //消息訂閱
    this.pubuid1 = PubSub.subscribe("changeChecked", this.changeCheckedType);
    this.pubuid2 = PubSub.subscribe("deleteItem", this.deleteItem);
  },
  beforeDestroy() {
    // this.$bus.$off(["changeChecked", "deleteItem"]);
    //取消訂閱
    PubSub.unsubscribe(this.pubuid1);
    PubSub.unsubscribe(this.pubuid2);
  },

  components: { todoHeader, todoList, todoFooter },
};
</script>

<style>
.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 3px solid rgb(0, 0, 0);
  padding: 20px;
  font-family: sans-serif;
}
</style>
