<template>
  <header class="navbar-container d-flex justify-content-between align-items-end">
    <!-- Brand Name -->
    <div class="brand-name fs-2 fw-bolder" @click="() => router.push('/')">
      <span style="font-size: 1.3em; color: #2A3D66;">Stay</span>
      <span style="font-size:1.1em;color: #F28C28;">&nbsp;&nbsp;SunSmart</span>
    </div>
    <nav>
      <RouterLink active-class="activeRouter" to="/">Home</RouterLink>
      <RouterLink active-class="activeRouter" to="/uvindex">UV Index Check</RouterLink>
      <RouterLink active-class="activeRouter" to="/visual">UV Impact</RouterLink>
      <RouterLink active-class="activeRouter" to="/clothing">Protect Your Skin</RouterLink>
      <RouterLink active-class="activeRouter" to="/personalisation">Personalized Sun Safety Schedule</RouterLink>
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
  padding-top: 7%;
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
  font-size: 1.1rem;
  font-weight: 700;
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
  border-radius: 10px;
  display: inline-block;
  transition: 0.3s;
  background: #00ACDE;
}

.activeRouter {
  color: white;
  border: 2px solid transparent;
  border-radius: 10px;
  display: inline-block;
  transition: 0.3s;
  background: #00ACDE;
}
</style>
