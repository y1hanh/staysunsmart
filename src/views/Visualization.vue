<script setup>
import { ref, onMounted, computed} from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const img_urls = ref([]);

// Titles and descriptions for each image

const titles = ref([
  "A Growing Epidemic: More Cases, More Risk",
  "Melanoma: The Most Dangerous Type of Skin Cancer",
  "Why What You Do Now Determines Your Future Risk",
  "Are You Traveling to a High-Risk UV Zone? Here’s What You Need to Know",
  "Understanding Year-Wise Monthly UV Index Trends Across Australian Cities"
]);
const descriptions = ref([
  `Looking at the trends over the past few decades, one thing stands out—the number of people diagnosed with skin cancer has been rising at an alarming rate. The visualization makes this undeniable: the <b>blue line</b> representing incidence has skyrocketed, while the <b>red line</b> for mortality has remained relatively stable.<br><br>

At first glance, this might seem reassuring—fewer deaths, better treatments. But the reality is more complex. <b>For every 10,000 new cases diagnosed, approximately 1,100 additional deaths occur.</b> The risk hasn’t disappeared—it’s just being managed with better medical interventions.<br><br>

Skin cancer isn’t something that happens overnight. It’s the result of years of accumulated UV exposure, and that’s where the second insight becomes crucial—<b>age matters more than we realize.</b>`,

  `Not all skin cancers are the same. Some are more treatable, while others are far deadlier. The final visualization highlights a chilling fact—<b>melanoma accounts for 72% of all skin cancer deaths.</b><br><br>

Unlike other forms of skin cancer, melanoma is <b>fast-spreading, aggressive, and deadly</b> if not caught early. It’s also the type of skin cancer that affects younger people more frequently.<br><br>

<b>The good news?</b> Melanoma is also one of the most preventable cancers.<br><br>

<b>Here’s how to protect yourself:</b>
<ul>
  <li>Know the ABCDE rule for spotting suspicious moles:</li>
  <li><b>Asymmetry</b> – One half doesn’t match the other.</li>
  <li><b>Border</b> – Edges are uneven or blurry.</li>
  <li><b>Color</b> – Multiple shades in one mole.</li>
  <li><b>Diameter</b> – Larger than a pencil eraser.</li>
  <li><b>Evolution</b> – Any change in size, shape, or color.</li>
  <li>Schedule an annual skin check—early detection saves lives.</li>
  <li>Avoid tanning beds at all costs—they increase melanoma risk significantly.</li>
  <li>Reapply sunscreen frequently—once in the morning is not enough.</li>
</ul>`,

  `For many, skin cancer seems like something that affects older generations—a disease to worry about later in life. But here’s what the data tells us: <b>most skin cancer deaths in older adults could have been prevented</b> by better sun protection during their youth.<br><br>

Think about it like this—<b>UV damage is cumulative.</b> Every sunburn you get now doesn’t just heal and disappear; it stays with you, increasing your lifetime risk. This means that the choices you make in your teens and 20s will directly impact your health in your 50s and 60s.<br><br>

<b>Prevention isn’t just a recommendation—it’s a necessity.</b>
<ul>
  <li>Wear sunscreen daily.</li>
  <li>Avoid excessive sun exposure.</li>
  <li>Schedule regular skin checks.</li>
</ul>These aren’t just habits; <b>they’re lifesaving measures.</b>`,

  `While Australians are naturally exposed to some of the highest UV levels in the world, <b>some regions face significantly greater risks than others.</b> The next visualization breaks this down by state, showing how <b>Queensland and New South Wales</b> have some of the highest skin cancer incidence rates in the country.<br><br>

  If you live in these regions, you should be <b>extra cautious with your sun safety habits</b>—but what if you’re just visiting?<br><br>

  Many people don’t consider <b>UV exposure when planning a trip</b>, but they should. Whether you’re backpacking through Australia, heading to a beach destination, or simply spending extended time outdoors, the UV index in high-risk areas is <b>far stronger than many travelers are used to.</b><br><br>

  For example, someone traveling from <b>Tasmania to Queensland</b> might not expect the massive difference in UV exposure. Without the right precautions, <b>a day out in the sun can quickly turn into severe sunburn, dehydration, or long-term skin damage.</b><br><br>

<b>To stay safe:</b>
  <ul>
    <li><b>Check the UV index</b> of your destination before heading out.</li>
    <li><b>Pack sun protection gear</b>—sunscreen, hats, sunglasses, and UV-protective clothing.</li>
    <li><b>Avoid peak sun hours</b> (10 AM - 4 PM) when the UV rays are most intense.</li>
    <li><b>Reapply sunscreen every two hours</b>, especially if swimming or sweating.</li>
  </ul><br>

  Taking these precautions isn’t just about avoiding discomfort—<b>it’s about protecting your skin from lasting damage that could lead to cancer later in life.</b>`
,

  `UV radiation is the leading cause of skin cancer, and its intensity varies across <b>locations, seasons, and years.</b> The final visualization provides a detailed look at <b>year-wise monthly UV index trends</b> across multiple Australian cities, offering insights into how UV exposure fluctuates and why sun protection strategies should be adapted accordingly.<br><br>

  Unlike a simple annual average, this visualization reveals a clear <b>seasonal pattern</b>—UV levels spike during summer months (<b>December to February</b>) and drop during winter (<b>June to August</b>). However, in certain regions, particularly <b>northern Australia</b>, UV exposure remains <b>dangerously high throughout the year.</b><br><br>

  <b>The concerning trend?</b> UV levels appear to be increasing over time, possibly due to <b>climate change and atmospheric shifts.</b> This means that the risk of <b>UV-related skin damage and skin cancer</b> is only growing, reinforcing the need for <b>consistent sun protection habits.</b><br><br>

<b>Here’s how to protect yourself based on where you live and when you’re outdoors:</b><br>

  📍 <b>If you live in high-UV cities like Darwin, Townsville, or Brisbane:</b>
  <ul>
    <li>UV levels remain high year-round, so <b>daily sunscreen application (SPF 30+)</b> is non-negotiable.</li>
    <li>Seek shade whenever possible—especially during <b>peak UV hours (10 AM - 4 PM).</b></li>
    <li>Long-sleeved UV-protective clothing and wide-brimmed hats should be part of your daily routine.</li>
  </ul><br>

  🌆 <b>If you live in southern cities like Melbourne, Canberra, or Adelaide:</b>
  <ul>
    <li>UV exposure is lower in winter but still dangerous in summer—<b>October to March requires extra caution.</b></li>
    <li>Don’t be fooled by cooler temperatures—<b>UV rays penetrate clouds,</b> so sun protection is still essential.</li>
    <li>Winter sun exposure can still cause damage—<b>wear sunscreen during prolonged outdoor activities.</b></li>
  </ul><br>

  🏖️ <b>If you’re traveling to high-UV locations or spending extended time outdoors:</b>
  <ul>
    <li><b>Check the UV index</b> before heading out—Australia has some of the highest UV levels in the world.</li>
    <li>Pack sun protection essentials—<b>a hat, sunglasses, sunscreen, and UV-protective clothing</b> should always be on your packing list.</li>
    <li><b>Reapply sunscreen every two hours,</b> especially if swimming or sweating.</li>
  </ul><br>

 <b>Why this matters:</b>
  The data is clear—<b>UV exposure is not just a summer issue, nor is it confined to certain regions.</b> Even locations with <b>lower seasonal UV levels</b> experience dangerous spikes throughout the year, and the increasing trend in UV intensity makes <b>long-term protection more critical than ever.</b>`
]);

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

    // Convert object values to an array
    if (parsedData && typeof parsedData === 'object') {
      let originalOrder = Object.values(parsedData);

      // Reorder images to: 4, 3, 1, 2, 5
      const customOrder = [3, 2, 0, 1, 4];
      img_urls.value = customOrder.map(i => originalOrder[i]);
    } else {
      console.error("Unexpected response format:", parsedData);
      img_urls.value = [];
    }
  } catch (error) {
    console.error("Failed to fetch images:", error);
    img_urls.value = [];
  }
}

const formattedDescriptions = computed(() => {
  return descriptions.value.map(text => text.replace(/<b>/g, "<span>").replace(/<\/b>/g, "</span>"));
});

onMounted(() => {
  getVisualization();
});
</script>

<template>
  <div class="visualization-container">
    <div class="vis-container">
      <div class="vis-title" style="color: white; font-weight: bold;">Skin Cancer Statistics Dashboard</div>
      <p class="vis-desc" style="color: white; font-size: 0.8em;">Comprehensive data on skin cancer incidence, mortality, and UV impacts across Australia.</p>
    </div>

    <div class="vis-title-container">
      <h5 class="vis-title">The Silent Danger: How UV Exposure is Fueling Skin Cancer in Australia</h5>
      <div class="vis-desc">
        It starts with something simple. A day at the beach. A hike in the mountains. A backyard barbecue.
        The sun feels warm, the sky is clear, and sunscreen? Maybe an afterthought. But what if every unprotected
        moment in the sun was silently adding up—creating a risk that you won’t see until years later?
      </div>
    </div>

    <div v-if="img_urls.length > 0">
      <div v-for="(img_url, index) in img_urls.slice(0, 5)" :key="index" class="row align-items-center image-section">

        <!-- Title above the image -->
        <div class="col-12 text-container">
          <h4 class="image-title">{{ titles[index] }}</h4>
        </div>

        <!-- Image -->
        <div class="col-12 image-container">
          <img :src="img_url" class="image-style" />
        </div>

        <!-- Description below the image (Only if description exists) -->
        <div v-if="formattedDescriptions.length > index" class="col-12 text-container">
          <p class="image-desc" v-html="formattedDescriptions[index]"></p>
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
  padding: 0;
}

.vis-container {
  margin-top: 0;
  margin-bottom: 10px;
  background:#2C3E50;
  padding: 10px 15px;
  align-items: center;
  font-size: 1.2rem;
}

.vis-title-container {
  font-size: 1.0rem;
  font-weight: bold;
  border-bottom: 2px solid #D9D3BD;
  margin-bottom: 20px;
  padding: 10px 15px;
}

.image-title, .image-desc {
  padding: 10px 15px;
}

.image-desc {
  border-bottom: 2px solid #D9D3BD;
}

.image-desc {
  margin: 0;
  line-height: 1.2;
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
  width: 60%;
  border-radius: 10px;
}
.small-break {
  display: block;
  height: 1.5px;
}
</style>





