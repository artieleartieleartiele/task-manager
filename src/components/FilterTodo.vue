<template>
  <div>
    Filter Todos:
    <select @change="limitTodos($event.target.value)">
      <option value="all">all</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FilterTodo",
  methods: {
    ...mapActions(["limitTodos"]),
  },
};
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
