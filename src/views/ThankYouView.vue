<script setup lang="ts">
import CheckoutProducts from '@/components/CheckoutPage/CheckoutProducts.vue'
import { Button } from 'primevue'
import { useCheckoutStore } from '@/store/useCheckoutStore'
import { useUserStore } from '@/store/useUserStore'
import router from '@/router'
import { onMounted } from 'vue'

const checkoutStore = useCheckoutStore()
const userStore = useUserStore()

function goToCatalog() {
  router.push('/catalog')
}

onMounted(() => {
  console.log(checkoutStore.purchasedItems)
})
</script>

<template>
  <main>
    <div class="thankyou-page-wrapper">
      <h1>Thank you for your purchase! 🎉</h1>
      <p>Your order has been successfully placed. We appreciate your business!</p>
      <p>
        We will contact you at
        <a :href="`mailto:${userStore.email}`" class="thankyou-page-email">{{ userStore.email }}</a>
        soon!
      </p>

      <div class="product-list">
        <p class="product-list-title">Your purchased products:</p>
        <CheckoutProducts
          v-for="product in checkoutStore.purchasedItems"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="thankyou-page-continue-shopping-button">
        <Button
          outlined
          label="Continue Shopping"
          @click="goToCatalog"
          class="p-button-raised p-button-success"
        />
      </div>
    </div>
  </main>
</template>

<style>
.thankyou-page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  gap: 1rem;
}
.product-list .product-cart-link .product-cart-wrapper .product-cart-delete-button {
  display: none;
}
.thankyou-page-email {
  color: var(--soft-green);
}
</style>
