<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 8px;
  margin-bottom: 16px;
}

button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
}
</style>
