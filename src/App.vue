<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/MainComponents/HeaderComponent.vue'
import FooterComponent from './components/MainComponents/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main>
    <RouterView />
  </main>
  <FooterComponent />
</template>
