<template>
  <header class="navbar-container d-flex justify-content-between align-items-end">
    <!-- Brand Name -->
    <div class="brand-name fs-4" @click="() => router.push('/')">
      <span style="font-size: 1.3em; color: #2A3D66;">Stay</span>
      <span style="font-size:1.0em;color: #F28C28;">&nbsp;&nbsp;SunSmart</span>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/uvindex">UV Index Check</RouterLink>
      <RouterLink to="/clothing">Protect Your Skin</RouterLink>
      <RouterLink to="/personalisation">Personalized Sun Safety Schedule</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter();
</script>

<style scoped>
/* Navbar Styling */
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 15px;
  padding-top: 6%;
  height: 10vh;
  z-index: 1000;
  background-color: #FFFFFF;
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
  cursor: pointer;
}

/* Navigation */
nav {
  display: flex;
  gap: 15px;
  align-self: flex-end;
  margin-right: 8%;
}

/* Rounded Square Navigation Links */
nav a {
  text-decoration: none;
  color: black;
  border: 2px solid transparent;
}

nav a:hover {
  color: white;
  border: 2px solid transparent;
  border-radius: 30px;
  display: inline-block;
  transition: 0.3s;
  background: #00ACDE;
}
</style>
