<template>
  <header class="navbar d-flex justify-content-between align-items-end">
    <!-- Brand Name -->
    <p class="brand-name fw-bold fs-4">
      <span>Stay</span>
      <span>SunSmart</span>
    </p>

    <!-- Navigation -->
    <nav>
      <RouterLink to="/">Home Page</RouterLink>
      <RouterLink to="/uvindex">UV Index Check</RouterLink>
      <RouterLink to="/clothing">Protect Your Skin</RouterLink>
      <RouterLink to="/personalisation">Personalized Sun Safety Schedule</RouterLink>
      <!-- <RouterLink to="/clothing">Clothing</RouterLink> -->
      <!-- <RouterLink to="/subscribe">Subscribe</RouterLink> -->
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  position: fixed;
  /* Fixed at the top */
  position: fixed;
  /* Always stays at the top */
  top: 0;
  left: 0;
  width: 100%;
  background: #94e8bf;
  padding: 12px 15px;
  height: 90px;
  /* Ensures enough space */
  display: flex;
  align-items: flex-end;
  /* Moves items to the bottom */
}

/* Styling for the Brand Name */
.brand-name {
  font-family: Menlo, sans-serif;
  color: #333;
  font-style: italic;
  display: flex;
  flex-direction: column;
  /* Ensures Stay & SunSmart are stacked */
  justify-content: flex-end;
  /* Align text to the bottom */
  margin-bottom: 0;
  /* Removes extra spacing */
  line-height: 1;
  background: #f0f0f0;
  padding: 15px;
  border-bottom: 1px solid #ccc;
  z-index: 1000;
}

/* Navigation */
nav {
  display: flex;
  gap: 15px;
  align-self: flex-end;
  /* Aligns nav to the bottom */
}

/* Rounded Square Navigation Links */
nav a {
  text-decoration: none;
  color: black;
  padding: 2px 10px;
  border: 2px solid transparent;
  border-radius: 30px;
  display: inline-block;
  transition: 0.3s;
  background: #1eb582;
}

/* Hover Effect */
nav a:hover {
  background-color: black;
  color: white;
}
</style>
