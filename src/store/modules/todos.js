import axios from "axios";
import { generateId } from "@utils";

const state = {
  todos: [],
};
const getters = {
  allTodos: (state) => state.todos,
};
const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    commit("FETCH_TODOS", res.data);
  },
  async addTodo({ commit }, todo) {
    const todoObj = {
      title: todo,
      completed: false,
      id: generateId(),
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      todoObj
    );
    commit("ADD_TODO", res.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("DELETE_TODO", id);
  },
  async updateTodo({ commit }, todo) {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo
    );
    commit("UPDATE_TODO", res.data);
  },
  async limitTodos({ commit }, limit) {
    limit = limit === "all" ? "" : parseInt(limit);
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit("FETCH_TODOS", res.data);
  },
};
const mutations = {
  FETCH_TODOS: (state, todos) => (state.todos = todos),
  ADD_TODO: (state, todo) => state.todos.unshift(todo),
  DELETE_TODO: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  UPDATE_TODO: (state, updTodo) => {
    const idx = state.todos.findIndex((todo) => todo.id === updTodo.id);
    state.todos.splice(idx, 1, updTodo);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
