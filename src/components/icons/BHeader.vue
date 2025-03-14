<template>
  <header class="navbar-container d-flex justify-content-between align-items-end">
    <!-- Brand Name -->
      <div class="brand-name fs-4">
          <span style="font-size: 1.3em; color: #2A3D66;">Stay</span>
          <span style ="font-size:1.0em;color: #F28C28;">&nbsp;&nbsp;SunSmart</span>
      </div>
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
  margin-top: 20px;
  top: 0;
  left: 0;
  width: 100%;
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
  justify-content: flex-start;
  align-items: flex-start;
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

}

nav a:hover {
  color: white;
  padding: 2px 10px;
  border: 2px solid transparent;
  border-radius: 30px;
  display: inline-block;
  transition: 0.3s;
  background: #00ACDE;
}
</style>
