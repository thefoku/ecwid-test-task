<script setup lang="ts">
import { Button } from 'primevue';
import { goBack } from '@/utils/RouterMethods/routerMethods';
</script>

<template>
  <div class="page404">
    <img alt="page not found image" class="img-404" src="../assets/img/404-icon.png" />
    <h1>Oooops!...</h1>
    <h3>We couldn’t find that page — maybe the address is wrong or it’s been moved.</h3>
    <Button
      class="button-to-home w-full product-card-button p-button-raised p-button-success"
      outlined
      @click="goBack"
      >Go Back</Button
    >
  </div>
</template>

<style scoped>
.page404 {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
  height: 70%;
}

.button-to-home {
  width: 50%;
  max-width: 250px;
  min-width: 150px;
}

h1 {
  text-align: center;
}

.img-404 {
  height: 150px;
  width: 150px;
}

@media (min-width: 1024px) {
  .button-to-home {
    width: 250px;
  }
  .img-404 {
    height: 250px;
    width: 250px;
  }
}
</style>
