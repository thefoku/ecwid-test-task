import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const ROUTER_PATHS = {
  HOME: '/',
  ABOUT: '/about',
  CATALOG: '/catalog',
  CATEGORY: '/catalog/:categorySlug',
  PRODUCT: '/product/:productSlug',
  CHECKOUT: '/checkout',
  ORDER_CONFIRMATION: '/checkout/order-confirmation',
  NOT_FOUND: '/:pathMatch(.*)*',
} as const

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_PATHS.HOME,
      name: 'home',
      component: HomeView,
      meta: { title: 'Home Page' },
    },
    {
      path: ROUTER_PATHS.ABOUT,
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About' },
    },
    {
      path: ROUTER_PATHS.CATALOG,
      name: 'catalog',
      component: () => import('../views/CatalogView.vue'),
      meta: { title: 'Catalog' },
    },
    {
      path: ROUTER_PATHS.CATEGORY,
      name: 'category',
      component: () => import('../views/CatalogView.vue'),
    },
    {
      path: ROUTER_PATHS.PRODUCT,
      name: 'product',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: ROUTER_PATHS.CHECKOUT,
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
      meta: { title: 'Checkout' },
    },
    {
      path: ROUTER_PATHS.ORDER_CONFIRMATION,
      name: 'order-confirmation',
      component: () => import('../views/ThankYouView.vue'),
      meta: { title: 'Order Confirmation' },
    },
    {
      path: ROUTER_PATHS.NOT_FOUND,
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
