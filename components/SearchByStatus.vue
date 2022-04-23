<template>
  <aside>
    <p>Filter by status</p>
    <a-select
      mode="multiple"
      v-model="values"
      :options="filterOptions"
      style="width: 100%"
      :placeholder="placeholder"
      @change="getSelectedStatus"
    >
    </a-select>
  </aside>
</template>

<script>
export default {
  props: {
    placeholder: String,
  },

  data() {
    return {
      values: [],
      filterOptions: [
        {
          id: 0,
          value: "stack",
          title: "Stack",
        },
        {
          id: 1,
          value: "process",
          title: "Process",
        },
        {
          id: 2,
          value: "done",
          title: "Done",
        },
      ],
    };
  },
  methods: {
    getSelectedStatus(values) {
      this.$store.commit("todos/addFilter", values);
    },
  },
};
</script>