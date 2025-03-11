<script setup>
import { ref } from 'vue'

const selectedSkin = ref(null)

const selectSkinType = (skinType) => {
  selectedSkin.value = skinType
}
</script>

<template>
  g
    <h1>Personalisation</h1>
    <p>Please select the skin color you're interested in.</p>

    <div class="button-group">
      <button
        @click="selectSkinType('dark-skin')"
        :class="{ active: selectedSkin === 'dark-skin' }"
      >
        Dark Skin
      </button>
      <button
        @click="selectSkinType('medium-skin')"
        :class="{ active: selectedSkin === 'medium-skin' }"
      >
        Medium Skin
      </button>
      <button
        @click="selectSkinType('light-skin')"
        :class="{ active: selectedSkin === 'light-skin' }"
      >
        Light Skin
      </button>
    </div>
    <div v-if="selectedSkin" class="info-text">Here is information of {{ selectedSkin }}:</div>
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

button {
  width: 90px;
  height: 30px;
  border: 2px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
  border-radius: 8px;
  font-size: 12px;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #ddd;
}

/* Apply blue color to the selected button */
button.active {
  background-color: darkgray;
  color: white;
  border-color: darygray;
}

.info-text {
  margin-top: 15px;
  font-size: 16px;
}
</style>
