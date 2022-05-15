<template>
  <div class="container">
    <todoHeader @addItemFunction="addItem"></todoHeader>
    <todoList :tododata="tododata"></todoList>
    <todoFooter
      :todo="tododata"
      @deleteAllDoneItem="deleteAllDoneItem"
      @changeAllCheckedType="changeAllCheckedType"
    ></todoFooter>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

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
    changeCheckedType(id) {
      this.tododata.forEach((i) => {
        if (i.id == id) {
          i.done = !i.done;
        }
        return;
      });
    },

    updateItem(id, taskname) {
      console.log(id, taskname);
      this.tododata.forEach((i) => {
        if (i.id == id) {
          i.taskName = taskname;
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

    deleteItem(id) {
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

    this.$bus.$on("changeChecked", this.changeCheckedType);
    this.$bus.$on("deleteItem", this.deleteItem);
    this.$bus.$on("updateItem", this.updateItem);
  },
  beforeDestroy() {
    this.$bus.$off(["changeChecked", "deleteItem", "updateItem"]);
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
