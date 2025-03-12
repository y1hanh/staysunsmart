<script setup>
import { ref } from 'vue'
import axios from 'axios' // Import Axios for API requests

const location = ref('')
const uvIndex = ref(null)
const apiKey = 'YOUR_OPENWEATHER_API_KEY' // Replace with your API key

const searchLocation = async () => {
  if (!location.value) {
    alert('Please enter a location')
    return
  }

  try {
    // Step 1: Get latitude and longitude from the location name
    const geoResponse = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location.value}&limit=1&appid=${apiKey}`,
    )

    if (!geoResponse.data.length) {
      alert('Location not found')
      return
    }

    const { lat, lon } = geoResponse.data[0]

    // Step 2: Get UV Index using lat/lon
    const uvResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    )

    uvIndex.value = uvResponse.data.value
  } catch (error) {
    console.error('Error fetching UV Index:', error)
    alert('Failed to fetch UV Index. Try again later.')
  }
}
</script>

<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-md-6">
        <p class="p-3 fw-bold fs-4">UV Index</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <p class="p-3 fs-5 border bg-light">Learn about the UV Index and how to protect your skin from harmful UV rays.</p>
      </div>
       <!-- Input Field for User to Enter Location -->
        <div class="input-container">
          <input v-model="location" type="text" placeholder="Enter your location" />
          <button @click="searchLocation">Search</button>
        </div>

      <!-- Display UV Index Result -->
      <p v-if="uvIndex !== null">UV Index for {{ location }}: {{ uvIndex }}</p>
    </div>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

input {
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 8px 12px;
  border: none;
  background-color: darkgray;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: gray;
}
</style>
