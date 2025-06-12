<script setup lang="ts">
import CheckoutProducts from '@/components/CheckoutPage/CheckoutProducts.vue'
import InputField from '@/components/CheckoutPage/InputField.vue'
import { Button } from 'primevue'
import { useCheckoutStore } from '@/store/useCheckoutStore'
import { onMounted } from 'vue'
import router from '@/router'
import { useUserStore } from '@/store/useUserStore'
import { validateEmail } from '@/services/Validators/emailValidator'

const checkoutStore = useCheckoutStore()
const userStore = useUserStore()

function goBack() {
  router.back()
}

function goToCatalog() {
  router.push('/catalog')
}

function onPlaceOrderClick() {
  const isEmailValid = validateEmail()
  if (isEmailValid) {
    console.log('Email validated, push to Thank you page')
  } else {
    console.log('not valid')
  }
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
        <h3>Your products:</h3>
        <CheckoutProducts
          v-for="product in checkoutStore.items"
          :key="product.id"
          :product="product"
        />
        <p class="checkout-total">TOTAL: €{{ checkoutStore.totalPrice() }}</p>
      </div>
      <div class="checkout-information">
        <div class="checkout-email-wrapper">
          <InputField
            name="email"
            label="Enter your email so we can contact you:"
            type="email"
            placeholder="Email address"
            inputClass="checkout-email"
            :error="userStore.emailError"
            v-model:modelValue="userStore.email"
            :validate="validateEmail"
          />
        </div>
        <Button
          outlined
          label="Place Order"
          class="p-button-raised p-button-success"
          @click="onPlaceOrderClick"
        />
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
.checkout-total {
  font-weight: 600;
  font-size: 2rem;
}
.checkout-information {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  padding: 1rem;
  gap: 2rem;
}
.checkout-email-wrapper {
  margin-top: 2rem;
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
