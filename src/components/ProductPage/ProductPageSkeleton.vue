<script setup lang="ts">
import { Skeleton } from 'primevue'
</script>

<template>
  <div class="product-back-button">
    <Skeleton width="5rem" height="2.5rem" />
  </div>
  <div class="product-page-skeleton">
    <div class="product-image">
      <Skeleton width="40rem" height="55rem" class="mb-4" />
    </div>
    <div class="product-page-wrapper">
      <div class="product-details">
        <Skeleton width="20rem" height="2rem" class="mb-2" />
        <Skeleton width="10rem" height="1.5rem" class="mb-2" />
        <Skeleton width="15rem" height="1.5rem" class="mb-4" />
        <Skeleton width="30rem" height="1.5rem" class="mb-4" />
        <Skeleton width="15rem" height="2.5rem" />
      </div>
      <div class="product-buy-button">
        <Skeleton width="10rem" height="2rem" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-page-skeleton {
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
}
.product-page-wrapper,
.product-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
.product-image {
  width: 60%;
}
</style>
