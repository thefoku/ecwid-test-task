import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home Page' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About Us' },
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/CatalogView.vue'),
      meta: { title: 'Catalog' },
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
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
      meta: { title: 'Checkout' },
    },
    {
      path: '/checkout/order-confirmation',
      name: 'order-confirmation',
      component: () => import('../views/ThankYouView.vue'),
      meta: { title: 'Order Confirmation' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: 'Page Not Found' },
    },
  ],
})

router.beforeEach((to, _, next) => {
  document.title = (to.meta.title as string) || 'Ecwid Test Task'
  next()
})

export default router
