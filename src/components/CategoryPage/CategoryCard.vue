<script setup lang="ts">
import { defineProps } from 'vue';
import router from '@/router';
import { ROUTER_PATHS } from '@/router';

const props = defineProps<{
  image: string;
  name: string;
  slug: string;
}>();

const onCategoryClick = () => {
  const categorySlug = `${ROUTER_PATHS.CATALOG}/${props.slug}`;
  router.push(categorySlug);
};
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
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: linear-gradient(#e66465, #9198e5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-card img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.category-name {
  position: absolute;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vt-c-white);
  text-shadow: 1px 1px black;
  transition: all 0.3s ease;
}
.category-card:hover .category-name {
  transform: translateY(-8px) translateZ(0);
}
</style>
