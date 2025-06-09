<script setup lang="ts">
import { defineProps } from 'vue'
import router from '@/router'

const props = defineProps<{
  image: string
  name: string
  slug: string
}>()

const onCategoryClick = () => {
  console.log(`Category clicked: ${props.slug}`)
  router.push(`/catalog/${props.slug}`)
}
</script>

<template>
  <div class="category-card" @click="onCategoryClick">
    <img v-if="props.image" :src="props.image" :alt="props.name" class="category-image" />
    <h3 class="category-name">{{ props.name }}</h3>
  </div>
</template>

<style scoped>
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: linear-gradient(#e66465, #9198e5);
  transition: all 0.3s ease;
}
.category-card:hover {
  box-shadow: 0 0px 8px var(--vt-c-white);
  cursor: pointer;
}
</style>
