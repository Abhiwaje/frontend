<template>
    <div>
      <h2>Task List</h2>
      <!-- Display list of tasks from MongoDB -->
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [], // Fetch tasks from MongoDB using Axios
      };
    },
    mounted() {
      // Fetch tasks from MongoDB and update tasks array
    },
  };
  </script>
  