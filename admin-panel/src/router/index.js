import Vue from 'vue'
import VueRouter from 'vue-router'
import Statistic from '../views/Statistic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/statistics'
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistic
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
