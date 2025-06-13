<script setup lang="ts">
import router from '@/router';
import type { ProductCardItem } from '@/types/productCard';
import { Button } from 'primevue';
import { useProductStore } from '@/stores/useProductStore';
import Skeleton from 'primevue/skeleton';
import { addToCart } from '@/services/checkoutService';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  product: ProductCardItem;
}>();

const productStore = useProductStore();

const buttonText = ref('Add to Bag');

function onAddToBagClick() {
  buttonText.value = '✓';
  setTimeout(() => {
    buttonText.value = 'Add to Bag';
  }, 1000);
  addToCart(props.product.currentProduct);
}

function goBack() {
  router.back();
}

onMounted(() => {
  document.title = props.product.title;
});
</script>

<template>
  <div class="product-back-button">
    <Button outlined class="p-button-raised p-button-success" label="< Back" @click="goBack" />
  </div>
  <div class="product-page-wrapper">
    <div class="product-image">
      <Skeleton width="40rem" height="55rem" class="mb-4" v-if="productStore.loading" />
      <img v-if="!productStore.loading" :src="product.imageURL" :alt="product.title" />
    </div>
    <div class="product-details">
      <h1 class="product-name">{{ product.title }}</h1>
      <div class="product-price">
        <span v-if="product.discountedPrice" class="discounted-price">{{
          product.discountedPrice
        }}</span>
        <span class="price">{{ product.price }}</span>
      </div>
      <div class="product-description-wrapper" v-if="product.description">
        <p class="product-description-text">Product description:</p>
        <div class="product-description" v-html="product.description"></div>
      </div>
      <div class="product-buy-button">
        <Button
          :label="buttonText"
          outlined
          class="p-button-raised p-button-success"
          @click="onAddToBagClick"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-back-button {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}
.product-page-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  gap: 2rem;
}
.product-image {
  width: 60%;
}
.product-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
.product-details {
  text-align: left;
  margin-top: 1rem;
  width: 40%;
}
.product-name {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.product-description-wrapper {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}
.product-description-text {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--vt-c-white-soft);
}
.product-description {
  color: var(--vt-c-white-soft);
  line-height: 2;
}
.product-price {
  font-size: 1.5rem;
  font-weight: bold;
}
.discounted-price {
  color: red;
  text-decoration: line-through;
  margin-right: 0.5rem;
}
.price {
  color: green;
}
.product-buy-button {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.product-buy-button .p-button {
  width: 120px;
}

@media screen and (max-width: 1000px) {
  .product-page-wrapper {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
  .product-image {
    width: auto;
  }
  .product-details {
    width: auto;
  }
}
</style>
