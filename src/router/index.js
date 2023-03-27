import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView'
import RegisterView from '@/views/RegisterView'
import DashboardView from '@/views/DashboardView'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },


  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },

  

  {
    path: '/home',
    name: 'home',
    component: DashboardView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
