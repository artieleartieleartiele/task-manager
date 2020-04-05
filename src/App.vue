<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodo />
      <Todo />
    </div>
  </div>
</template>

<script>
import Todo from "@components/Todo";
import AddTodo from "@components/AddTodo";
import FilterTodo from "@components/FilterTodo";

export default {
  name: "App",
  components: {
    Todo,
    AddTodo,
    FilterTodo,
  },
};
</script>

<style>
body {
  font-family: "Courier New", Courier, monospace;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1000px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
