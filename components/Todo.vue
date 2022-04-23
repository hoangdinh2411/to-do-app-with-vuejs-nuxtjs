<template >
  <a-list :data-source="todos">
    <template #renderItem="item">
      <a-list-item class="list-item">
        <span class="btn" v-show="!editing" @click="deleteTodo(item.id)"
          >X</span
        >
        <aside
          v-if="!editing"
          :class="`text-wrapper ${item.status}-background`"
        >
          <span class="textField">
            {{ item.content }}
          </span>
          <span class="btn edit-btn" @click="toggleEditing">Edit</span>
        </aside>

        <aside v-else class="text-wrapper">
          <input
            ref="editingInput"
            class="editingInput"
            :value="item.content"
            @input="getNewText"
          />
          <aside class="editing">
            <span class="btn" @click="handleChangeTextTodo(item.id)">Save</span>
            <span class="btn" @click="cancelEditing">Cancel</span>
          </aside>
        </aside>
        <a-space v-show="!editing" style="height: 30px">
          <a-select
            :value="item.status"
            @change="(value) => handleChangeStatus(value, item.id)"
            style="width: 120px"
            :options="statusOptions"
          >
          </a-select>
        </a-space>
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      newText: "",
      editing: false,
      textStyle: "",
      statusOptions: [
        {
          id: 0,
          value: "",
          label: "Select status",
          disabled: true,
        },
        {
          id: 1,
          value: "process",
          label: "Process",
        },
        {
          id: 2,
          value: "stack",
          label: "Stack",
        },
        {
          id: 3,
          value: "done",
          label: "Done",
        },
      ],
    };
  },
  computed: {
    todos() {
      const filters = this.$store.state.todos.filters;
      const list = this.$store.state.todos.list;
      return filters.length === 0
        ? list
        : list.slice().filter((todo) => filters.includes(todo.status));
    },
  },
  methods: {
    getNewText(e) {
      this.newText = e.target.value;
    },
    handleChangeStatus(value, id) {
      const newList = this.$store.state.todos.list.map((todo) =>
        todo.id === id ? { ...todo, status: value } : todo
      );
      this.$store.commit("todos/setList", newList);
    },
    toggleEditing() {
      this.editing = true;
    },
    cancelEditing() {
      this.editing = false;
      this.newText = "";
    },
    handleChangeTextTodo(id) {
      const newList = this.$store.state.todos.list.map((todo) =>
        todo.id === id ? { ...todo, content: this.newText } : todo
      );
      this.$store.commit("todos/setList", newList);
      this.editing = false;
    },
    deleteTodo(id) {
      const newList = this.$store.state.todos.list
        .slice()
        .filter((todo) => todo.id !== id);
      this.$store.commit("todos/setList", newList);
    },
  },
  updated() {
    this.$axios
      .put("", {
        nuxtTodos: this.$store.state.todos.list,
      })
      .then((res) => console.log("success"))
      .catch((err) => console.log("error"));
  },
};
</script>

<style>
.text-wrapper {
  border-radius: 4px;
  padding: 0 6px;
  margin: 0 6px;
  width: 100%;
  text-align: left;
  position: relative;
  display: flex;
  height: 30px;
  justify-content: space-between;
}
.editingInput {
  flex: 1;
}
.textField {
  display: block;
  width: 100%;
  font-size: 18px;
}
.text-wrapper:hover .edit-btn {
  display: block;
}

.btn {
  min-width: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  margin: 0 6px;
}

.editing {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.edit-btn {
  display: none;
  line-height: 30px;
  height: 30px;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.btn:hover {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
.list-item {
  display: flex;
  height: 30px;
  margin-bottom: 12px;
  padding: 6px;
  border: none;
  align-items: center;
  cursor: pointer;
}

.list-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.done-background {
  background-color: aquamarine;
}
.process-background {
  background-color: lightblue;
}
.stack-background {
  background-color: red;
  color: white;
}
</style>