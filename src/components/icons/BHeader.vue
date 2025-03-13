<template>
  <header class="navbar-container d-flex justify-content-between align-items-end">
    <!-- Brand Name -->
    <p class="brand-name fs-4">
      <span>Stay</span>
      <span>SunSmart</span>
    </p>
    <nav>
      <RouterLink to="/">Home Page</RouterLink>
      <RouterLink to="/uvindex">UV Index Check</RouterLink>
      <RouterLink to="/clothing">Protect Your Skin</RouterLink>
      <RouterLink to="/personalisation">Personalized Sun Safety Schedule</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Navbar Styling */
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #AFF4C6;
  padding: 12px 15px;
  height: 10vh;
  z-index: 1000;
}

/* Styling for the Brand Name */
.brand-name {
  font-family: Menlo, sans-serif;
  color: #333;
  font-style: italic;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 0;
  line-height: 1;
  padding: 15px;
  z-index: 1000;
}

/* Navigation */
nav {
  display: flex;
  gap: 15px;
  align-self: flex-end;
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
  background: #20B2AA;
}

nav a:hover {
  color: white;
}
</style>
