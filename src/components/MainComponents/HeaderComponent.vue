<script setup lang="ts">
import { RouterLink } from 'vue-router';
import CartIconComponent from './CartIconComponent.vue';
import { ROUTER_PATHS } from '@/router';
</script>

<template>
  <header>
    <div class="header-wrapper">
      <nav class="header-nav">
        <RouterLink :to="ROUTER_PATHS.HOME">Home</RouterLink>
        <RouterLink :to="ROUTER_PATHS.ABOUT">About</RouterLink>
        <RouterLink :to="ROUTER_PATHS.CATALOG">Catalog</RouterLink>
      </nav>
      <div class="header-cart">
        <CartIconComponent />
      </div>
    </div>
  </header>
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav.header-nav {
  width: 80%;
  font-size: 1rem;
  padding: 1rem 0;
}

header .header-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav.header-nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav.header-nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav.header-nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .header-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  nav.header-nav {
    display: flex;
    text-align: left;
    width: 60%;
  }
}
</style>
