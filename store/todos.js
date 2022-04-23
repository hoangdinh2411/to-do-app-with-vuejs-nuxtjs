export const state = () => ({
  list: [],
  filters: [],
});

export const mutations = {
  fetchingTodo(state, todos) {
    state.list = todos;
  },
  add(state, newTodo) {
    state.list.push(newTodo)
  },
  addFilter(state, selectedValues) {
    state.filters = selectedValues;
  },
  setList(state, newList) {
    state.list = newList
  },

};
