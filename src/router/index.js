import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'hero',
    component: () => import('../views/hero/HeroView.vue')
  },
  {
    path: '/:case_type',
    name: 'home',
    component: () => import('../views/home/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes
})

export default router
