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
/* Navbar Styling */
.navbar {
  position: fixed; /* Fixed at the top */
  top: 0;
  left: 0;
  width: 100%;
  background: #94e8bf;
  padding: 12px 15px;
  height: 90px; /* Ensures enough space */
  display: flex;
  align-items: flex-end; /* Moves items to the bottom */
}

/* Styling for the Brand Name */
.brand-name {
  font-family: Menlo, sans-serif;
  color: #333;
  font-style: italic;
  display: flex;
  flex-direction: column; /* Ensures Stay & SunSmart are stacked */
  justify-content: flex-end; /* Align text to the bottom */
  margin-bottom: 0; /* Removes extra spacing */
  line-height: 1;
}

/* Navigation */
nav {
  display: flex;
  gap: 15px;
  align-self: flex-end; /* Aligns nav to the bottom */
}

/* Rounded Square Navigation Links */
nav a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 2px 10px;
  border: 2px solid transparent;
  border-radius: 10px;
  display: inline-block;
  transition: 0.3s;
  background: #10814a;
}

/* Hover Effect */
nav a:hover {
  background-color: black;
  color: white;
}
</style>



