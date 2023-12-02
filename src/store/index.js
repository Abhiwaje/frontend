// Import Axios or your preferred HTTP client
import axios from 'axios';

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    login(state, user) {
      state.isAuthenticated = true;
      state.user = user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        // Make an API call to authenticate the user
        const response = await axios.post('http://localhost:3000/auth/login', credentials);

        // Assuming the backend returns a user object upon successful login
        const user = response.data;

        // Commit the login mutation with the user data
        commit('login', user);

        // You may also want to store the JWT token in localStorage or a cookie for persistent authentication

        return user;
      } catch (error) {
        // Handle login failure, show error messages, etc.
        throw error;
      }
    },
    async logout({ commit }) {
      try {
        // Make an API call to logout on the backend if necessary

        // Commit the logout mutation
        commit('logout');

        // You may also want to clear the JWT token from localStorage or a cookie

      } catch (error) {
        // Handle logout failure, show error messages, etc.
        throw error;
      }
    },
  },
});
