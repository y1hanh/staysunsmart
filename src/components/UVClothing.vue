<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
  linkText: String
});
</script>

<template>
  <div class="brand-card">
    <div class="brand-logo"></div>
    <div class="brand-info">
      <h3 class="brand-title">{{ title }}</h3>
      <p class="brand-description">{{ description }}</p>
      <a :href="link" target="_blank" class="brand-link">
        {{ linkText }} <span class="arrow">→</span>
      </a>
    </div>
  </div>
</template>


<style scoped>
.brand-card {
  display: flex;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 150px;
  width: 250px;
  transition: transform 0.2s ease-in-out;
}

.brand-card:hover {
  transform: translateY(-3px);
}

.brand-logo {
  width: 40px;
  height: 40px;
  background: #ddd;
  border-radius: 8px;
  margin-right: 15px;
}

.brand-info {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 1rem;
  font-weight: bold;
  color: #004d40;
  margin-bottom: 5px;
}

.brand-description {
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 5px;
}

.brand-link {
  font-size: 0.9rem;
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.brand-link:hover {
  color: #0056b3;
}

.arrow {
  margin-left: 5px;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;
}

.brand-link:hover .arrow {
  transform: translateX(5px);
}
</style>
