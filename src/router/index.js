import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/informacion',
    name: 'informacion',
    component: () => import('@/views/Information.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('@/views/SignUp.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('@/views/Menu.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top
    return savedPosition || {top:0}
  },
})

export default router
