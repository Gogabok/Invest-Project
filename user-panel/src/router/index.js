import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/dashboard.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
