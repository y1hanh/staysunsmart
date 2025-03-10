<script setup>
import { ref } from 'vue'
const message = ref('Here is all you need to know.')
</script>

<template>
  <section class="page-content">
    <h1>Skin Protection</h1>
    <p>{{ message }}</p>
  </section>
</template>

<style scoped></style>
