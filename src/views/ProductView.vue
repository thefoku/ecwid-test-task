<script setup lang="ts">
import ProductPage from '@/components/ProductPage/ProductPageComponent.vue';
import ProductPageSkeleton from '@/components/ProductPage/ProductPageSkeleton.vue';
import { useProductStore } from '@/stores/useProductStore';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { goToNotFound } from '@/utils/RouterMethods/routerMethods';

const productStore = useProductStore();
const route = useRoute();

watch(
  () => route.params.productSlug,
  async (newSlug) => {
    await productStore.loadProductBySlug(newSlug as string);
    if (!productStore.currentProduct) {
      goToNotFound();
    }
  },
);

onMounted(async () => {
  await productStore.loadProductBySlug(route.params.productSlug as string);
  if (!productStore.currentProduct) {
    goToNotFound();
  }
});
</script>

<template>
  <div v-if="productStore.currentProduct && !productStore.loading">
    <ProductPage :product="productStore.currentProduct" />
  </div>
  <div v-else>
    <ProductPageSkeleton />
  </div>
</template>
