<template>
  <section class="todo-app-wrapper">
    <h1>To do app</h1>
    <aside>
      <MyInput />
    </aside>
    <SearchByStatus placeholder="Search todo by status" />
    <aside class="todo-list">
      <Todo />
    </aside>
  </section>
</template>

<script>
import MyInput from "./MyInput.vue";
import SearchByStatus from "./SearchByStatus.vue";
import Todo from "./Todo.vue";
export default {
  components: {
    MyInput,
    SearchByStatus,
    Todo,
  },
  data() {
    return {};
  },
  created() {
    this.$axios
      .get()
      .then((res) => res.data)
      .then((data) => {
        this.$store.commit("todos/fetchingTodo", data.record.nuxtTodos);
      })
      .catch((err) => console.log(err));
  },

};
</script>

<style>
.todo-app-wrapper {
  background-color: white;
  min-height: 300px;
  width: 400px;
  border-radius: 6px;
  padding: 12px;
  text-align: center;
}
h1 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
}
aside {
  margin: 12px 0;
}

p {
  font-weight: 700;
  text-align: left;
}

.todo-list {
  width: 100%;
  min-height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 6px 0;
}

.message {
  margin: 12px 0;
  font-size: 12px;
  color: red;
  text-transform: uppercase;
}
</style>