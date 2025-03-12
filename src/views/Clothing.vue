<script setup>
import { ref } from 'vue'

const externalUrl = ref('') // Store the clicked URL

const openUrlOnRight = (url) => {
  externalUrl.value = url
}
</script>

<template>
  <div class="container mt-2">
    <div class="row">
      <!-- Left Side Content -->
      <div class="col-md-6">
        <p class="p-3 fw-bold fs-4">Clothing</p>
        <p class="p-3 fs-5 border bg-light">
          Learn about the importance of wearing sun-protective clothing.
        </p>
        <a
          href="javascript:void(0);"
          @click="openUrlOnRight('https://www.skincancer.org/skin-cancer-prevention/sun-protection/sun-protective-clothing/')"
        >
          Click here to read more.
        </a>
      </div>

      <!-- Right Side: Show Web Page -->
      <div class="col-md-6" v-if="externalUrl">
        <iframe
          :src="externalUrl"
          class="iframe-content"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.iframe-content {
  width: 100%;
  height: 500px; /* Adjust as needed */
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

