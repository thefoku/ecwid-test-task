import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/CatalogView.vue'),
    },
    {
      path: '/catalog/:categorySlug',
      name: 'category',
      component: () => import('../views/CatalogView.vue'),
    },
    {
      path: '/product/:productSlug',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
    },
  ],
})

export default router
