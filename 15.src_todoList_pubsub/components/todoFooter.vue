<template>
  <div class="footer">
    <div class="checkgroup">
      <input type="checkbox" v-model="AllChecked" />
      <p>{{ checkedTodo }}</p>
      <span>/</span>
      <p>{{ allTodo }}</p>
    </div>

    <button class="deleteButton" @click="deleteDoneItem">
      清除已完成的任務
    </button>
  </div>
</template>

<script>
export default {
  props: ["todo"],

  methods: {
    deleteDoneItem() {
      this.$emit("deleteAllDoneItem");
    },
  },

  computed: {
    allTodo() {
      return this.todo.length;
    },

    checkedTodo() {
      return this.todo.filter((t) => {
        return t.done;
      }).length;
    },

    AllChecked: {
      get() {
        if (this.allTodo == 0 && this.checkedTodo == 0) {
          return false;
        }
        return this.checkedTodo == this.allTodo;
      },

      set(value) {
        this.$emit("changeAllCheckedType", value);
      },
    },
  },
};
</script>

<style scoped>
.footer {
  padding: 10px;
  border: 2px solid rgb(166, 166, 166);
  background-color: rgba(115, 170, 213, 0.262);
  display: flex;
  justify-content: space-between;
}

.footer:hover {
  background-color: rgba(26, 111, 177, 0.262);
}

.checkgroup {
  display: flex;
  align-items: center;
}

.checkgroup p {
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  margin: 0 2px;
}

.checkgroup input[type="checkbox"] {
  margin-right: 10px;
}

.deleteButton {
  background-color: rgb(236, 81, 81);
  color: rgb(213, 255, 246);
  border-radius: 3%;
  padding: 5px 20px;
  height: 40px;
  border: none;
  transition: all 0.3s;
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
