<template>
  <div>
    <h3>Todo</h3>
    <div class="todos">
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        :class="{'is-complete': todo.completed}"
      >
        <div class="icon">
          <div style="float: left;">
            <CheckboxMarkedCircleOutlineIcon @click="toggleComplete(todo)" title="Complete Task" />
          </div>
          <div style="float: right;">
            <MinusCircleOutlineIcon @click="deleteTodo(todo.id)" title="Delete Task" />
          </div>
        </div>
        <br />
        <div>{{ todo.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CheckboxMarkedCircleOutlineIcon from "@icons/CheckboxMarkedCircleOutline";
import MinusCircleOutlineIcon from "@icons/MinusCircleOutline";

export default {
  name: "Todo",
  components: {
    CheckboxMarkedCircleOutlineIcon,
    MinusCircleOutlineIcon
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    toggleComplete(todo) {
      const updtTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updtTodo);
    }
  },
  computed: {
    ...mapGetters(["allTodos"])
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
.icon {
  cursor: pointer;
}
.is-complete {
  background: #35495e;
  color: #ffe;
}
</style>
