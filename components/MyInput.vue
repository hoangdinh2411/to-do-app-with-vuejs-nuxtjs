<template>
  <a-form class="todo-form">
    <a-input
      v-model="inputText"
      placeholder="What are you going to do tomorrow"
    />
    <a-button type="primary" html-type="button" @click="handleAddTodo"
      >Add new</a-button
    >
  </a-form>
</template>

<script>
export default {
  name: "MyInput",
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    handleAddTodo() {
      if (this.inputText !== "") {
        const id = Math.floor(Math.random() * 1000);
        const newList = {
          id,
          content: this.inputText,
          status: "",
        };
        this.$store.commit("todos/add", newList);
        this.$axios.put("", {
          nuxtTodos: this.$store.state.todos.list,
        });
        this.inputText = "";
      }
    },
  },
};
</script>

<style>
.todo-form {
  width: 100%;
  display: flex;
}
.labels {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
}
</style>