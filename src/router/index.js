import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView'
import RegisterView from '@/views/RegisterView'
import DashboardView from '@/views/DashboardView'
import PostCreateView from '@/views/PostCreateView'

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


  {
    path: '/posts-create',
    name: 'posts-create',
    component: PostCreateView
  },

  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
