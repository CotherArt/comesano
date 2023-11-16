import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: '/informacion',
    name: 'informacion',
    component: () => import('@/views/Informacion.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/Login.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/views/user/Sign-up.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('@/views/Menu.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
