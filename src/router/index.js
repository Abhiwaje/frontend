import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import Signup from '@/components/Signup.vue';
import TaskList from '@/components/TaskList.vue';
import TaskForm from '@/components/TaskForm.vue';

const routes = [
  { path: '/', redirect: '/login' }, // Redirect to the login page or another default route
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/tasks', component: TaskList },
  { path: '/add-task', component: TaskForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
