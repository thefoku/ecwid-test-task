<script setup lang="ts">
import { Button } from 'primevue'
import router, { ROUTER_PATHS } from '@/router'

const routeToCatalog = () => {
  router.push(ROUTER_PATHS.CATALOG)
}
</script>

<template>
  <div class="cover-container">
    <h1 class="cover-text">Welcome to the store!</h1>
    <Button
      label="Shop Now"
      raised
      severity="secondary"
      class="w-full product-card-button"
      @click="routeToCatalog"
    />
  </div>
</template>

<style scoped>
.cover-container {
  width: 100%;
  height: 85vh;
  background-image: url(@/assets/img/cover-book-store.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 2rem;
}
.cover-text,
.cover-container .p-button-label {
  color: #fff;
  font-size: 3rem;
  text-shadow: 3px 1px 5px black;
}
</style>
