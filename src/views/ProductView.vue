<script setup lang="ts">
import ProductPage from '@/components/ProductPage/ProductPageComponent.vue'
import ProductPageSkeleton from '@/components/ProductPage/ProductPageSkeleton.vue'
import router from '@/router'
import { useProductStore } from '@/stores/useProductStore'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ROUTER_PATHS } from '@/router'

const productStore = useProductStore()
const route = useRoute()

watch(
  () => route.params.productSlug,
  async (newSlug) => {
    await productStore.loadProductBySlug(newSlug as string)
    if (!productStore.currentProduct) {
      router.push(ROUTER_PATHS.NOT_FOUND)
    }
  },
)

onMounted(async () => {
  await productStore.loadProductBySlug(route.params.productSlug as string)
  if (!productStore.currentProduct) {
    router.push(ROUTER_PATHS.NOT_FOUND)
  }
})
</script>

<template>
  <div v-if="productStore.currentProduct && !productStore.loading">
    <ProductPage :product="productStore.currentProduct" />
  </div>
  <div v-else>
    <ProductPageSkeleton />
  </div>
</template>
