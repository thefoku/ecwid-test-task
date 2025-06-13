<script setup lang="ts">
import type { CartItem } from '@/types/cart';
import { Button } from 'primevue';
import { useCheckoutStore } from '@/stores/useCheckoutStore';

const props = defineProps<{
  product: CartItem;
}>();

const checkoutStore = useCheckoutStore();

const onDeleteButtonClick = (event: Event) => {
  event.stopPropagation();
  checkoutStore.removeItem(props.product.id);
};
</script>

<template>
  <a :href="`/product/${product.slug}`" class="product-cart-link">
    <div class="product-cart-wrapper">
      <div class="product-cart-delete-button">
        <Button
          fluid
          outlined
          class="p-button-rounded w-full p-button-raised p-button-success transparent-border cart-delete-button"
          label="X"
          @click.prevent="onDeleteButtonClick"
        />
      </div>
      <div class="product-cart-image">
        <img :src="product.imageURL" :alt="product.title" />
      </div>
      <div class="product-cart-details">
        <h3 class="product-cart-details-name">{{ product.title }}</h3>
        <p>Price: {{ product.formattedPrice }}</p>
        <p>Quantity: {{ product.quantity }}</p>
      </div>
    </div>
  </a>
</template>

<style scoped>
.product-cart-link {
  display: flex;
  width: 100%;
  text-decoration: none;
  color: inherit;
  padding: 0.2rem;
  border-radius: 5px;
}
.product-cart-wrapper {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  position: relative;
  background-color: var(--color-background);
  border-radius: 5px;
  border: 1px solid var(--soft-green);
}
.product-cart-delete-button {
  position: absolute;
  right: 10px;
  top: 10px;
}
.product-cart-delete-button .cart-delete-button {
  text-align: center;
}
.product-cart-image {
  max-width: 30%;
}
.product-cart-image img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.product-cart-details {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;
  font-size: 1.1rem;
}
.product-cart-link:hover .product-cart-details-name {
  color: var(--p-button-outlined-success-color); /* Change text color on hover */
}
</style>
