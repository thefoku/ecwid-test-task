<script setup lang="ts">
import { Card } from 'primevue'
</script>

<template>
  <main>
    <div class="about">
      <h1>About me</h1>
      <Card class="about-card">
        <template #header>
          <img class="about-card-image" alt="user header" src="@/assets/img/roma-image.jpg" />
        </template>
        <template #title
          ><a href="https://github.com/thefoku" target="_blank">Roman Kargin</a></template
        >
        <template #content>
          <p class="m-0 about-content">
            Living in Tbilisi, and working as a technical support specialist in Ecwid by Lightspeed
            e-commerce platform. Soon, I plan to change my career and become a Front-end software
            developer. In my free time, I play video games, guitar, and take care of two cats and a
            dog (I'm hugging him).
          </p>
        </template>
      </Card>
    </div>
  </main>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.about-card {
  align-items: center;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  width: 90%;
}
.about-card:hover {
  border-color: var(--soft-green);
}

.about-card-image {
  max-width: 100%;
}

@media screen and (max-width: 1200px) {
  .about-card {
    width: 100%;
  }
}
</style>
