<script setup lang="ts">
import CheckoutProducts from '@/components/CheckoutPage/CheckoutProducts.vue'
import { useCheckoutStore } from '@/store/useCheckoutStore'
import { onMounted } from 'vue'
const checkoutStore = useCheckoutStore()

onMounted(async () => {
  await checkoutStore.loadCartFromStorage()
})
</script>

<template>
  <main>
    <div class="checkout-wrapper">
      <div class="checkout-products-list">
        <CheckoutProducts
          v-for="product in checkoutStore.items"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="checkout-information"></div>
    </div>
  </main>
</template>

<style scoped>
.checkout-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}
.checkout-products-list {
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.checkout-information {
  width: 60%;
  padding: 1rem;
}
</style>
