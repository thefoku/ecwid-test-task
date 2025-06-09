<script setup lang="ts">
import Button from 'primevue/button'
import { useCategories } from '@/composables/useCategories'
import { useProducts } from '@/composables/useProducts'

const { fetchCategories } = useCategories()
const { fetchProducts } = useProducts()
</script>

<template>
  <main>
    <Button label="Fetch Categories" severity="secondary" @click="fetchCategories" />
    <Button label="Fetch Products" severity="secondary" @click="fetchProducts" />
  </main>
</template>
