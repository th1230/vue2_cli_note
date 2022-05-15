<template>
  <div class="todoItem">
    <div class="checkboxGroup">
      <input type="checkbox" :checked="todo.done" @click="changeChecked" />
      <p v-show="!todo.isEdit" class="itemName">{{ todo.taskName }}</p>
      <input
        ref="editInput"
        v-show="todo.isEdit"
        type="text"
        @blur="handleBlur"
        :value="todo.taskName"
      />
    </div>
    <div>
      <button class="button btn-delete" @click="deleteItem">刪除</button>
      <button
        v-show="!todo.isEdit"
        class="button btn-update"
        @click="handleEdit"
      >
        修改
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    changeChecked() {
      this.$bus.$emit("changeChecked", this.todo.id);
    },
    deleteItem() {
      this.$bus.$emit("deleteItem", this.todo.id);
    },
    handleEdit() {
      if (this.todo.hasOwnProperty("isEdit")) {
        this.todo.isEdit = true;
      } else {
        this.$set(this.todo, "isEdit", false);
      }

      this.$nextTick(function () {
        this.$refs.editInput.focus();
      });
    },
    handleBlur(e) {
      this.todo.isEdit = false;
      if (!e.target.value.trim()) {
        return alert("輸入不能為空");
      }
      this.$bus.$emit("updateItem", this.todo.id, e.target.value);
    },
  },
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
.button {
  color: rgb(213, 255, 246);
  border-radius: 5%;
  padding: 5px 20px;
  height: 40px;
  border: none;
  transition: background-color 0.3s;
  margin-right: 5px;
}

.button:hover {
  cursor: pointer;
}

.button:active {
  cursor: pointer;
  transform: scale(0.9);
}

.btn-delete {
  background-color: rgb(236, 81, 81);
}

.btn-delete:hover {
  background-color: rgb(233, 51, 51);
}
.btn-delete:acitve {
  background-color: rgb(231, 11, 11);
}

.btn-update {
  background-color: rgb(81, 153, 236);
}

.btn-update:hover {
  background-color: rgb(45, 131, 231);
}
.btn-update:acitve {
  background-color: rgb(19, 121, 237);
}
</style>
