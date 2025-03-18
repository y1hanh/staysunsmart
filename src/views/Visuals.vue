<script setup>
import { ref } from 'vue';

const items = ref([]);
const description = ref({
  "image_url_1": {
    title: "descirption 1",
    description: "descirption 1"
  },
  "image_url_2": {
    title: "descirption 2",
    description: "descirption 2"
  },
  "image_url_3": {
    title: "descirption 1",
    description: "descirption 1"
  },
  "image_url_4": {
    title: "descirption 1",
    description: "descirption 1"
  },
  "image_url_5": {
    title: "descirption 1",
    description: "descirption 1"
  },
})
async function getVisualization() {
  try {
    const response = await fetch('https://t0fs66vtch.execute-api.us-east-1.amazonaws.com/test');
    const { body } = await response.json();
    let parsedData;
    parsedData = JSON.parse(body);
    for (const [key, value] of Object.entries(parsedData)) {
      const text = description.value[key];
      items.value.push({
        image: value,
        text: text
      });
    }

  }
  catch (error) {
    console.error("Error fetching visualization data:", error);
  }
}
getVisualization()
</script>
<template>
  <div class="container">
    <div v-for="(item, index) in items" :key="index" class="row">
      <div class="content" :class="{ 'reverse': index % 2 !== 0 }">
        <img :src="item.image" alt="Image" class="image" />
        <div class="text">
          <h3>{{ item.text.title }}</h3>
          <p>{{ item.text.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.content {
  display: flex;
  align-items: center;
  width: 100%;
}

.content.reverse {
  flex-direction: row-reverse;
}

.image {
  width: 50%;
  height: auto;
  margin: 10px;
}

.text {
  width: 50%;
  font-size: 16px;
  text-align: center;
}
</style>