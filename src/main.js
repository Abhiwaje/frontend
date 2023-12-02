import { createApp } from 'vue'; // Import createApp instead of Vue
import App from './App.vue';
import router from './router'; // Make sure this path is correct

const app = createApp(App);

app.use(router);

app.mount('#app');
