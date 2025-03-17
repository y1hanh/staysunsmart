<script setup>
import { RouterView } from 'vue-router'
import BHeader from './components/icons/BHeader.vue' // Import navigation bar
import Reminder from '@/components/Reminder.vue'
</script>

<template>
  <div class="layout">
    <BHeader />
    <Reminder />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  /* Stack BHeader and content */
}

main {
  margin-top: 8%;
  min-height: calc(100vh - 80px);
}
</style>
