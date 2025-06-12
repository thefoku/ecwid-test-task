<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CartIconComponent from './CartIconComponent.vue'
</script>

<template>
  <header>
    <div class="header-wrapper">
      <nav class="header-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/catalog">Catalog</RouterLink>
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
  width: 100%;
  font-size: 12px;
  text-align: center;
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
    padding: 1rem calc(var(--section-gap) / 2);
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
    font-size: 1rem;
    width: 60%;
    padding: 1rem 0;
  }
}
</style>
