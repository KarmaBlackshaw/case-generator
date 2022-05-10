import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'hero',
    component: () => import('../views/hero/HeroView')
  },
  {
    path: '/:case_type',
    name: 'home',
    component: () => import('../views/home/HomeView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
