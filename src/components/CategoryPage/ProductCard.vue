<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';
import { ROUTER_PATHS } from '@/router';
import { ref } from 'vue';
import type { ProductCardItem } from '@/types/productCard';
import { addToCart } from '@/services/checkoutService';
import { showCheckMarkOnClick, DEFAULT_ADD_TO_BAG_TEXT } from '@/utils/Product/addToBagButtonUtil';
import { onCardClick } from '@/utils/RouterMethods/routerMethods';

const props = defineProps<{
  product: ProductCardItem;
}>();

const buttonText = ref(DEFAULT_ADD_TO_BAG_TEXT);

const addToBagOnClick = async () => {
  showCheckMarkOnClick(buttonText);
  addToCart(props.product.currentProduct);
};
</script>

<template>
  <div class="product-card-wrapper">
    <a
      class="product-card-link"
      :href="`${ROUTER_PATHS.PRODUCT}/${product.slug}`"
      @click.prevent="onCardClick(product.slug)"
    >
      <Card style="overflow: hidden">
        <template #header>
          <img :alt="product.title" :src="product.imageURL" />
          <span v-if="product.discountedPrice" class="p-card-ribbon">ON SALE</span>
        </template>
        <template #title> {{ product.title }}</template>
        <template #subtitle>
          <span v-if="product.discountedPrice" :class="{ highlighted: product.discountedPrice }">{{
            product.discountedPrice
          }}</span>
          <span> </span>
          <span class="price" :class="{ 'line-through grey': product.discountedPrice }">{{
            product.price
          }}</span>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1 justify-center align-center">
            <Button
              :label="buttonText"
              outlined
              class="w-full product-card-button p-button-raised p-button-success"
              @click.prevent.stop="addToBagOnClick"
            />
          </div>
        </template>
      </Card>
    </a>
  </div>
</template>

<style>
.product-card-wrapper {
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
}
.product-card-wrapper:hover .p-card-title {
  color: var(--p-button-outlined-success-color);
}
.product-card-wrapper:hover {
  border-color: var(--p-button-outlined-success-color);
  transition: all 0.3s ease-in-out;
}

.product-card-wrapper .p-card.p-component {
  width: 20rem;
  height: 100%;
}
.product-card-wrapper .p-card .p-card-header {
  position: relative !important;
}
.product-card-link {
  padding: 0px;
}
.product-card-link .p-card-header img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.product-card-link .p-card-body {
  height: 100%;
}
.product-card-link .p-card-footer {
  margin-top: auto;
}
.highlighted {
  color: green;
  font-weight: bold;
  margin-right: 0.3rem;
}
.grey {
  color: grey;
}
.product-card-link .p-card-ribbon {
  position: absolute;
  right: 0px;
  background-color: var(--p-primary-700);
  padding: 5px 10px;
  top: 1rem;
}
.product-card-link .p-card-footer .product-card-button {
  width: 120px;
}
.product-card-link .p-card-footer .product-card-button:active {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transform: translate3d(0, 1px, 0);
}
.product-card-link .p-card-subtitle .price {
  font-size: 1.2rem;
}
</style>
