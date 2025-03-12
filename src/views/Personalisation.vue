<script setup>
import { ref } from 'vue'

const selectedSkin = ref(null)

const selectSkinType = (skinType) => {
  selectedSkin.value = skinType
}
</script>

<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-auto">
        <p class="p-3 fw-bold fs-4">Personalisation</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <p class="p-3 fs-5 border bg-light">Please select the skin color you're interested in.</p>
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
      </div>
      <div class="col-md-6">
        <div v-if="selectedSkin" class="p-3 fs-5 ">Here is information of {{ selectedSkin }}:</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 15px;
}

button {
  width: 90px;
  height: 45px;
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
  font-size: 16px;
}
</style>
