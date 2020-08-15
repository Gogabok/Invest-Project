import Vue from 'vue'
import VueRouter from 'vue-router'
import Statistic from '../views/Statistic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/statistic',
    name: 'statistic',
    component: Statistic
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.replace({ path: '/', redirect: '/statistic' })


export default router
