<template>
    <div>
      <h2>Add New Task</h2>
      <form @submit.prevent="addTask">
        <label for="title">Task Title:</label>
        <input type="text" v-model="title" required />
        <button type="submit">Add Task</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
      };
    },
    methods: {
      addTask() {
        // Implement functionality to add new task to MongoDB using Axios
      },
    },
  };
  </script>
  