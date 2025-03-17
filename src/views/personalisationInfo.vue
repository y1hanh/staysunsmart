<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { yui } from "globals";

// Your WeatherAPI Key
const API_KEY = "1d09352cb690453384720753251503";
const CITY = "Melbourne";

// Reactive properties
const uvIndex = ref(null);
const uvStatus = ref("Loading...");
const uvDescription = ref("Fetching UV data...");
const sunscreenAmount = ref("Calculating...");

// Function to fetch UV data
const fetchUVIndex = async () => {
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`
    );

    if (response.data && response.data.current) {
      uvIndex.value = response.data.current.uv;
      updateUVStatus(uvIndex.value);
    }
  } catch (error) {
    console.error("Error fetching UV data:", error);
    uvStatus.value = "Error";
    uvDescription.value = "Unable to fetch UV data";
  }
};

// Function to update UV status based on the index
const updateUVStatus = (index) => {
  if (index <= 2) {
    uvStatus.value = "Low";
    uvDescription.value = "Minimal protection required";
  } else if (index <= 5) {
    uvStatus.value = "Moderate";
    uvDescription.value = "Use sunglasses, SPF 30+ sunscreen";
  } else if (index <= 7) {
    uvStatus.value = "High";
    uvDescription.value = "Wear protective clothing, SPF 50+ sunscreen";
  } else if (index <= 10) {
    uvStatus.value = "Very High";
    uvDescription.value = "Seek shade, wear sunglasses and sunscreen";
  } else {
    uvStatus.value = "Extreme";
    uvDescription.value = "Avoid sun exposure, wear full protection";
  }
  calculateSunscreen(index);
};

// Calculate sunscreen amount based on UV Index
const calculateSunscreen = (uv) => {
  let baseAmount = 36;
  if (uv === 0){
    sunscreenAmount.value = "No need for sunscreen";
    return;
  }
  if (1<= uv <= 2) {
    sunscreenAmount.value = `${baseAmount * 0.5}g `;
  } else if (uv <= 5) {
    sunscreenAmount.value = `${baseAmount}g `;
  } else if (uv <= 7) {
    sunscreenAmount.value = `${baseAmount * 1.5}g `;
  } else {
    sunscreenAmount.value = `${baseAmount * 2}g `;
  }
};

// Fetch UV data when the component is mounted
onMounted(fetchUVIndex);
</script>

<template>
  <div class="sun-safety-container">
    <!-- UV Index -->
    <div class="uv-container">
      <div class="uv-text-box">
        <span class="uv-text">Current UV Index</span>
        <p class="uv-text">Melbourne</p>
      </div>
      <div class="uv-box-container">
        <div class="uv-box">
          <p class="uv-number">{{ uvIndex !== null ? uvIndex : "..." }}</p>
        </div>
      </div>
      <div class="uv-status-box">
        <span class="uv-status">{{ uvStatus }}</span>
        <p class="uv-description">{{ uvDescription }}</p>
        <p class="sunscreen-amount">Recommended Sunscreen: {{ sunscreenAmount }}</p>
      </div>
    </div>

    <!-- Daily Sun Exposure Timeline -->
    <div class="sun-exposure">
      <h4>Daily Sun Exposure Timeline</h4>
      <div class="timeline">
        <span class="safe">6-9 AM</span>
        <span class="caution">9-11 AM</span>
        <span class="high-risk">11 AM - 3 PM</span>
        <span class="caution">3-5 PM</span>
        <span class="safe">5-8 PM</span>
      </div>
      <div class="legend">
        <span class="safe-box"> Safe</span>
        <span class="caution-box">Caution</span>
        <span class="high-risk-box">High Risk</span>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Sun Safety Container */
.sun-safety-container {
  width: 100%;
  margin-left: 20px;
}

.uv-container {
  display: flex;
  align-items: stretch;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  width: 97%;
  height: 80px;
}


/* UV Text Box */
.uv-text-box {
  background: #5C6BC0; /* Keep original color */
  padding: 8px;
  border-radius: 15px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80px; /* Ensures same height */
  flex: 1;
}
.uv-text {
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
}

/* UV Circle Box */
.uv-box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 80px;
}
.uv-box {
  background: #E57373;
  color: black;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 1;
}

.uv-number {
  font-weight: bold;
  margin: 0;
  padding: 0;
}

/* UV Status Box */
.uv-status-box {
  background: #7986CB; /* Different color */
  padding: 8px;
  border-radius: 15px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80px; /* Ensures same height */
  flex: 1;
}

.uv-status {
  font-size: 1rem;
  color:white;
  font-weight: bold;
}

.uv-description {
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
}

.sunscreen-amount {
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
}

/* Sun Exposure Timeline */
.sun-exposure {
  margin-top: 20px;
}
.timeline span{
  font-size: 0.8rem; /* Decrease text size */
  padding: 3px 85px; /* Reduce padding to make it smaller */
  border-radius: 1px;
}
.safe {
  background: #A5D6A7;
  padding: 5px;
  border-radius: 5px;
}
.caution {
  background: #FFCC80;
  padding: 5px;
  border-radius: 5px;
}
.high-risk {
  background: #FFAB91;
  padding: 5px;
  border-radius: 5px;
}
.legend {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.safe-box {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
}

.safe-box::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #A5D6A7;
}

.caution-box {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
}

.caution-box::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #FFCC80;
}

.high-risk-box {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
}

.high-risk-box::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #FFAB91;
}


</style>
