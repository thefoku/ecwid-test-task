<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import router from '@/router'
import { ref } from 'vue'
import type { ProductCardItem } from '@/types/ecwid'
import { addToCart } from '@/services/checkoutService'

// const props = defineProps<ProductCardItem>()
const props = defineProps<{
  product: ProductCardItem
}>()

const buttonText = ref('Add to Bag')

const addToBagOnClick = async (event: Event) => {
  event.stopPropagation()
  console.log('Add to bag clicked for:', props.product.currentProduct)
  addToCart(props.product.currentProduct)
}

const onCardClick = (slug: string) => {
  router.push(`/product/${slug}`)
}
</script>

<template>
  <div class="product-card-wrapper">
    <a
      class="product-card-link"
      :href="`/product/${product.slug}`"
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
              @click.prevent="addToBagOnClick"
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
.p-card-header img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.p-card-body {
  height: 100%;
}
.p-card-footer {
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
.p-card-ribbon {
  position: absolute;
  right: 0px;
  background-color: var(--p-primary-700);
  padding: 5px 10px;
  top: 1rem;
}
.p-card-footer .product-card-button {
  width: 120px;
}
.p-card-footer .product-card-button:active {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transform: translate3d(0, 1px, 0);
}
.p-card-subtitle .price {
  font-size: 1.2rem;
}
</style>
