<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const img_urls = ref([]);

async function getVisualization() {
  try {
    const response = await fetch('https://t0fs66vtch.execute-api.us-east-1.amazonaws.com/test');
    const { body } = await response.json();
    let parsedData;

    try {
      parsedData = JSON.parse(body);
    } catch (error) {
      console.error("JSON parsing error:", error);
      parsedData = {};
    }

    // ✅ Convert object values to an array
    if (parsedData && typeof parsedData === 'object') {
      img_urls.value = Object.values(parsedData);
    } else {
      console.error("Unexpected response format:", parsedData);
      img_urls.value = [];
    }
  } catch (error) {
    console.error("Failed to fetch images:", error);
    img_urls.value = [];
  }
}

onMounted(() => {
  getVisualization();
});
</script>

<template>
  <div class="visualization-container">
    <div class="vis-container">
      <div class="vis-title" style="color: white; font-weight: bold; font-size: 1em;">Skin Cancer statistics DashBoard</div>
      <p class="vis-desc" style="color: white; font-size: 0.8em;">Comprehensive data on skin cancer incidence, mortality and UV impacts across Australia</p>
    </div>
    <div v-if="img_urls.length > 0">
      <div v-for="(img_url, index) in img_urls.slice(0, 4)" :key="index" class="row align-items-center">
        <!-- Move images 1 & 3 to the left -->

        <div v-if="index % 2 === 0" class="col-12 image-container">
          <img :src="img_url" class="image-style" />
        </div>
        <!-- <div v-if="index % 2 === 0" class="col-6"></div>  --><!-- Empty space for right alignment -->

        <!-- Move images 2 & 4 to the right -->
        <!-- <div v-if="index % 2 !== 0" class="col-6"></div> --> <!-- Empty space for left alignment -->
        <div v-if="index % 2 !== 0" class="col-12 image-container">
          <img :src="img_url" class="image-style" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading images...</p>
    </div>
  </div>
</template>


<style scoped>
.visualization-container {
  padding: 20px;
  margin-top: 20px;
}

.vis-container {
  margin-bottom: 10px;
  background:#2C3E50;
  padding: 10px 15px;
  align-items: center;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-left {
  text-align: left;
}
.empty {
  /* Creates spacing for the alternating image effect */
}
.image-style {
  width: 100%;
  border-radius: 10px;
}
</style>





