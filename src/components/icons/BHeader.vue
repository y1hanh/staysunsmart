<template>
  <header class="navbar d-flex justify-content-between align-items-center">
    <h1>Sun Protection</h1>
    <nav>
      <RouterLink to="/">Home Page</RouterLink>
      <RouterLink to="/uvindex">UV Index</RouterLink>
      <RouterLink to="/impact">UV Impact</RouterLink>
      <RouterLink to="/personalisation">Personalisation</RouterLink>
      <RouterLink to="/clothing">Clothing</RouterLink>
      <RouterLink to="/subscribe">Subscribe</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  position: fixed;
  /* Always stays at the top */
  top: 0;
  left: 0;
  width: 100%;
  background: #f0f0f0;
  padding: 15px;
  border-bottom: 1px solid #ccc;
  z-index: 1000;
}

nav {
  display: flex;
  gap: 15px;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

nav a:hover {
  color: blue;
}
</style>
