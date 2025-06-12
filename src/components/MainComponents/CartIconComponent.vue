<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CartIcon from '@/assets/img/shopping-bag.svg'
import { computed } from 'vue'
import { useCheckoutStore } from '@/store/useCheckoutStore'

const checkoutStore = useCheckoutStore()

const cartItemsCount = computed(() => checkoutStore.totalQuantity())
</script>

<template>
  <RouterLink to="/checkout" class="cart-link">
    <div class="cart-counter">
      <span>{{ cartItemsCount }}</span>
    </div>
    <CartIcon fill="#fff" class="cart-icon" />
  </RouterLink>
</template>

<style>
header .cart-icon {
  width: 40px;
  height: 40px;
}

header .cart-icon path {
  fill: var(--soft-green);
}

.header-cart .cart-link {
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.cart-counter {
  position: absolute;
  top: 0px;
  right: 0px;
  border: 1px solid var(--vt-c-indigo);
  border-radius: 50%;
  width: 40%;
  height: 40%;
  text-align: center;
}
</style>
