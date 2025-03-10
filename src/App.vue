<script setup>
import { RouterView } from 'vue-router'
import BHeader from './components/icons/BHeader.vue' // Import navigation bar
</script>

<template>
  <div class="layout">
    <BHeader />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column; /* Stack BHeader and content */
}

main {
  margin-top: 80px; /* Prevent content from overlapping BHeader */
  padding: 20px;
}
</style>
