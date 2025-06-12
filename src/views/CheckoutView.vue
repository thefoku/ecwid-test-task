<script setup lang="ts">
import CheckoutProducts from '@/components/CheckoutPage/CheckoutProducts.vue'
import { Button } from 'primevue'
import { useCheckoutStore } from '@/store/useCheckoutStore'
import { onMounted } from 'vue'
import router from '@/router'
const checkoutStore = useCheckoutStore()

function goBack() {
  router.back()
}

function goToCatalog() {
  router.push('/catalog')
}

onMounted(async () => {
  await checkoutStore.loadCartFromStorage()
})
</script>

<template>
  <main>
    <div class="product-back-button">
      <Button outlined class="p-button-raised p-button-success" label="< Back" @click="goBack" />
    </div>
    <div class="checkout-wrapper" v-if="checkoutStore.items.length > 0">
      <div class="checkout-products-list">
        <CheckoutProducts
          v-for="product in checkoutStore.items"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="checkout-information">
        <Button outlined label="Place Order" class="p-button-raised p-button-success" />
      </div>
    </div>
    <div class="checkout-empty" v-else>
      <h2 class="text-center">Your cart is empty</h2>
      <p class="text-center">
        Please add some products to your cart before proceeding to checkout.
      </p>
      <Button
        outlined
        label="Continue Shopping"
        @click="goToCatalog"
        class="p-button-raised p-button-success"
      />
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 1rem;
}
.checkout-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 60vh;
}
</style>
