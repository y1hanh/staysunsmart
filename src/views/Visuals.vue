<script setup>
import { ref } from 'vue';

const items = ref([]);
//4,3,1,2,5
const description = ref({
  "image_url_4": {
    title: "A Growing Epidemic: More Cases, More Risk",
    description: "Skin cancer diagnoses have skyrocketed over the past decades, as seen in the blue incidence line. The red mortality line remains stable, thanks to better treatments, but the danger isn’t fading.\n\nFor every 10,000 new cases, approximately 1,100 additional deaths occur. Why rely on treatment when prevention is in our hands? Skin cancer is a slow build-up of UV damage—and the next insight shows why early protection matters."
  },
  "image_url_3": {
    title: "Melanoma: The Most Dangerous Type of Skin Cancer",
    description: "Not all skin cancers are the same. Melanoma is responsible for 72% of skin cancer deaths, making it the most aggressive and deadliest form.\n\n✅ Know the ABCDE rule (Asymmetry, Border, Color, Diameter, Evolution) to identify dangerous moles.\n✅ Get annual skin checks—early detection saves lives.\n✅ Avoid tanning beds—they increase melanoma risk significantly.\n✅ Reapply sunscreen frequently—once in the morning is not enough.\n\nBut melanoma isn’t just an issue for older adults—it starts much earlier than you think."
  },
  "image_url_1": {
    title: "Determines Your Future Risk",
    description: "Many believe skin cancer is a problem for older generations, but the damage starts young. Every sunburn increases your lifetime risk, with effects surfacing years later.\n\n🔹 Early sun protection reduces long-term risks.\n🔹 DNA damage happens before visible signs appear.\n🔹 Preventative habits today prevent skin cancer tomorrow.\n\nSo how do you adjust your habits based on location and environment?"
  },
  "image_url_2": {
    title: "Are You Traveling to a High-Risk UV Zone? Here’s What You Need to Know",
    description: "While Australia faces high UV exposure nationwide, Queensland and New South Wales have the highest skin cancer rates due to extreme sun intensity.\n\nIf you live or travel to high-risk areas, take extra precautions:\n✅ Check the UV index before heading outdoors.\n✅ Pack essentials—sunscreen, hats, sunglasses, and UV-protective clothing.\n✅ Avoid peak sun hours (10 AM - 4 PM).\n✅ Reapply sunscreen every two hours, especially after swimming.\n\nUnderstanding where and when UV exposure is highest allows you to adapt and protect yourself."
  },
  "image_url_5": {
    title: "Understanding Year-Wise Monthly UV Index Trends Across Australian Cities",
    description: "UV levels fluctuate across seasons and cities, with northern regions like Darwin and Townsville experiencing high UV exposure year-round.\n\n🔹 Summer (Dec-Feb) sees extreme UV levels across Australia.\n🔹 Winter (Jun-Aug) lowers UV intensity in southern cities, but exposure remains dangerous.\n🔹 Long-term UV levels are rising, increasing overall risk.\n\nLocation-based sun safety tips:\n📍 High-UV cities (e.g., Darwin, Townsville, Brisbane) → Sun protection is a daily necessity.\n🌆 Seasonal UV cities (e.g., Melbourne, Canberra, Adelaide) → Take extra care from October to March.\n🏖️ Travelers → Know the UV index before visiting a new location.\n\nThe visualization reinforces an important message: UV exposure is unavoidable, but protection is always within our control."
  }
});

async function getVisualization() {
  try {
    const response = await fetch('https://t0fs66vtch.execute-api.us-east-1.amazonaws.com/test');
    const { body } = await response.json();
    let parsedData = JSON.parse(body);

    let tempItems = [];
    for (const [key, value] of Object.entries(parsedData)) {
      const text = description.value[key];
      if (text) {
        tempItems.push({ image: value, text });
      }
    }

    // Ensure the order follows: [4, 3, 1, 2, 5]
    const order = ["image_url_4", "image_url_3", "image_url_1", "image_url_2", "image_url_5"];

    items.value = order.map(key => tempItems.find(item => description.value[key] === item.text)).filter(Boolean);
  } catch (error) {
    console.error("Error fetching visualization data:", error);
  }
}
getVisualization();

</script>
<template>
  <div class="container">
    <div class="map-container">
      <div class="map-description">
        <h2>🌞 UV Index Map</h2>
        <p>This map provides real-time UV index data to help you stay safe from excessive sun exposure.
          Use this information to plan outdoor activities and protect your skin.</p>
      </div>
      <div class="iframe-container">
        <iframe class="uv_visual_map" src="https://staysunsmart.s3.us-east-1.amazonaws.com/uv_index_map.html"
          frameborder="0">
        </iframe>
      </div>
    </div>

    <div v-for="(item, index) in items" :key="index" class="row">
      <div class="content" :class="{ 'reverse': index % 2 !== 0 }">
        <img :src="item.image" alt="Image" class="image" />
        <div class="text">
          <h3>{{ item.text.title }}</h3>
          <p v-html="item.text.description.replace(/\n/g, '<br>')"></p>
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
  font-size: larger;
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
  margin-top: 30px;
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
  font-size: 18px;
  text-align: left;
  white-space: normal;
  line-height: 1.8;
  margin-bottom: 8px;
}

.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 20px;
}

.map-description {
  max-width: 80%;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
}

.map-description h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #61ABBE;
}

.iframe-container {
  width: 80%;
  height: 500px;
  overflow: hidden;
  position: relative;
}

.uv_visual_map {
  transform: scale(0.8);
  transform-origin: top left;
  width: 120%;
  height: 125%;
  border: none;
  position: absolute;
  top: 10;
  left: 0;
  display: block;
}
</style>
