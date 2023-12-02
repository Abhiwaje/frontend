<template>
  <div>
    <h2>Signup</h2>
    <!-- eslint-disable-next-line vue/multi-word-component-names -->
    <form @submit.prevent="signup">
      <label for="username">Username:</label>
      <input type="text" v-model="username" required />
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" v-model="confirmPassword" required />
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    signup() {
      // Implement signup functionality using Axios
      if (this.password !== this.confirmPassword) {
        // Handle password mismatch
        console.error("Passwords do not match");
        return;
      }

      axios.post('your_signup_api_endpoint', {
        username: this.username,
        password: this.password,
      })
      .then(response => {
        // Handle successful signup
        console.log(response.data);
      })
      .catch(error => {
        // Handle signup error
        console.error(error);
      });
    },
  },
};
</script>
