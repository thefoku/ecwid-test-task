<script setup lang="ts">
import { Skeleton } from 'primevue'
</script>

<template>
  <div class="product-card-skeleton">
    <div class="skeleton-image">
      <Skeleton width="100%" height="500px" />
    </div>
    <div class="skeleton-details">
      <Skeleton width="80%" height="30px" class="mb-2" />
      <Skeleton width="60%" height="20px" class="mb-2" />
      <Skeleton width="40%" height="20px" class="mb-2" />
    </div>
    <div class="skeleton-button">
      <Skeleton width="40%" height="40px" />
    </div>
  </div>
</template>

<style scoped>
.product-card-skeleton {
  border: 1px solid transparent;
  border-radius: 8px;
  width: 20rem;
}
.skeleton-image {
  margin-bottom: 0.5rem;
  width: 100%;
  height: 500px;
}
.skeleton-details {
  padding: var(--p-card-body-padding);
  display: flex;
  flex-direction: column;
  gap: var(--p-card-caption-gap);
}
.skeleton-button {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: var(--p-card-body-padding);
}
</style>
