<template>
  <div v-if="showReminder" class="reminder">
    <div class="close-btn" @click="dismissReminder">X</div>
    <p>Reminder: It's time to reapply sunscreen! ☀️</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showReminder = ref(true);

const dismissReminder = () => {
  showReminder.value = false;
};

</script>

<style scoped>
.reminder {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 250px;
  height: 120px;
  background: #F28C28;
  padding: 12px 15px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  color: azure;
}

.close-btn {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  font-weight: bold;
}
</style>
