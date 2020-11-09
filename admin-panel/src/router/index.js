import Vue from 'vue'
import VueRouter from 'vue-router'
import Statistic from '../views/Statistic'
import Start from '../views/Start'
import Step1 from '../components/start/Step1'

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
  {
    path: '/start',
    name: 'start',
    component: Start,
    redirect: '/start/step-1',
    children: [
      {
        path: '/start/step-1',
        component: Step1,
        name: 'start.step1'
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
