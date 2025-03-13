<script setup>
import { ref } from "vue";
import PersonalisationInfoInfo from "../views/personalisationInfo.vue";

/* Define an array of skin types with Roman numerals */
/* Define an array of skin types with their recommended protection */
const skinTypes = ref([
  {
    value: "very-light",
    roman: "Type I: Very Fair Skin, Always Burns, Never Tans",
    label: "Very Light Skin",
    protection: [
      { icon: "✔️", text: "Sunscreen : SPF 50+" },
      { icon: "✔️", text: "Reapply : Every 2 Hours" },
      { icon: "✔️", text: "Max Exposure : 15-20 minutes without additional protection" }
    ]
  },
  {
    value: "light",
    roman: "Type II: Fair Skin, Burns Easily, Tans Minimally",
    label: "Light Skin",
    protection: [
      { icon: "✔️", text: "Sunscreen : SPF 30+" },
      { icon: "✔️", text: "Reapply : Every 2-3 Hours" },
      { icon: "✔️", text: "Max Exposure : 20-30 minutes without additional protection" }
    ]
  },
  {
    value: "medium",
    roman: "Type III: Medium Skin, Sometimes Burns, Tans Gradually",
    label: "Medium Skin",
    protection: [
      { icon: "✔️", text: "Sunscreen : SPF 30" },
      { icon: "✔️", text: "Reapply : Every 3 Hours" },
      { icon: "✔️", text: "Max Exposure : 30-40 minutes without additional protection" }
    ]
  },
  {
    value: "olive",
    roman: "Type IV: Olive Skin, Rarely Burns, Tans Well",
    label: "Olive Skin",
    protection: [
      { icon: "✔️", text: "Sunscreen : SPF 15-30" },
      { icon: "✔️", text: "Reapply : Every 4 Hours" },
      { icon: "✔️", text: "Max Exposure : 45-60 minutes without additional protection" }
    ]
  },
  {
    value: "dark",
    roman: "Type V: Dark Skin, Rarely Burns, Deeply Pigmented",
    label: "Dark Skin",
    protection: [
      { icon: "✔️", text: "Sunscreen : SPF 15" },
      { icon: "✔️", text: "Reapply : Every 4-5 Hours" },
      { icon: "✔️", text: "Max Exposure : 1 Hour without additional protection" }
    ]
  },
  {
    value: "very-dark",
    roman: "Type VI: Very Dark Skin, Never Burns, Deeply Pigmented",
    label: "Very Dark Skin",
    protection: [
      { icon: "✔️", text: "Sunscreen : SPF 15 (optional)" },
      { icon: "✔️", text: "Reapply : Every 5 Hours" },
      { icon: "✔️", text: "Max Exposure : 1.5 Hours without additional protection" }
    ]
  }
]);


/* Store the selected skin type */
const selectedSkin = ref("");

/* Function to get the selected skin type details */
const getSelectedSkin = () => {
  return skinTypes.value.find((s) => s.value === selectedSkin.value);
};

</script>

<template>
  <div class="personalization-page">
    <div class="container mt-2">
      <div class="left-side">

        <!-- Title Row -->
        <div class="row">
          <div class="col">
            <p class="personalized-title">Personalised Sun Safety Schedule</p>
          </div>
        </div>

        <!-- Subtitle Row -->
        <div class="row">
          <div class="col">
            <p class="personalized-description">
              Get customised sun protection recommendations based on your skin type.
            </p>
          </div>
        </div>

        <!-- Dropdown Row -->
        <div class="row">
          <div class="col">
            <div class="dropdown-container">
              <label for="skinType" class="dropdown-label">Select Your Skin Type:</label>
              <select id="skinType" class="styled-dropdown" v-model="selectedSkin">
                <option value="" disabled selected>Click here to select your skin type..</option>
                <option v-for="skin in skinTypes" :key="skin.value" :value="skin.value">
                  {{ skin.roman }} <!-- Display Roman numeral -->
                </option>
              </select>
              <p class="info-text">Your skin type determines how quickly you burn and how much protection you need.</p>
            </div>
          </div>
        </div>
        <!-- after choosing your skin type, you will be given a personalised sun safety schedule to follow. -->
        <div class="row">
          <div class="col">
            <div v-if="selectedSkin" class="selected-skin-box">

              <p class="select-box-title">Your Personalised Sun Safety Schedule</p>
              <p class="select-box-choose">{{ getSelectedSkin()?.roman }}</p>
              <p class="select-box-info">Based on your skin type, we have customised recommemdation to help you stay safe in the sun.</p>
            </div>
          </div>
        </div>
        <!-- Protection Recommendations -->
        <div class="row">
          <div class="col">
            <div v-if="selectedSkin" class="recommended-protection">
              <p class="protection-title">Recommended Protection</p>
              <ul>
                <li v-for="item in getSelectedSkin()?.protection" :key="item.text">
                  {{ item.icon }} {{ item.text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Right Side - Sun Safety Information -->
      <div class="right-side">
          <PersonalisationInfoInfo v-if="selectedSkin" />
        </div>
    </div>
  </div>
</template>



<style scoped>

.personalization-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}
/* General Styling */
.container {
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: white;
  border-radius: 10px;
  overflow-y: auto;
}

.left-side {
  width: 50%;
  text-align: left;
}

/* Right Section - Sun Safety Info */
.right-side {
  width: 50%;
  padding: 20px;
  text-align: left;
}


/* Dropdown Section */
.dropdown-container {
  background: #1B9C96; /* Green background */
  padding: 40px;
  border-radius: 15px;
  text-align: left; /* Align text to the left */
  color: white;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto; /* Centers the green box */
}

/* Label - Always Align Left */
.dropdown-label {
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  text-align: left; /* Ensures text aligns left */
  width: 100%;
  margin-bottom: 10px;
}

/* Styled Dropdown */
.styled-dropdown {
  width: 100%; /* Make dropdown take the full width inside container */
  max-width: 400px;
  padding: 8px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #EBFFEE;
  cursor: pointer;
  display: block;
  text-align: left;
  margin-top: 5px;
}

/* Info Text */
.info-text {
  margin-top: 15px;
  font-size: 0.9rem;
  color: white;
  text-align: left; /* Align left */
  max-width: 500px;
}

.selected-skin-box {
  background: #4CAF50; /* Green background */
  padding: 15px;
  border-radius: 15px;
  text-align: center;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  max-width: 600px;
  margin: 20px auto;
}

.select-box-title {
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: left;
  color: black;
}

.select-box-choose {
  font-size: 0.8rem;
  margin-bottom: 10px;
  text-align: left;
  color:#FDD3D0;
}

.select-box-info {
  font-size: 0.8rem;
  margin-bottom: 10px;
  text-align: left;
  color: black;
}

/* Recommended Protection Section */
.recommended-protection {
  background: #FFF5CC;
  padding: 20px;
  border-radius: 15px;
  max-width: 300px;
  margin: 20px auto;
  text-align: left;
}

/* Recommended Protection Title */
.protection-title {
  font-size: 1.2rem;
  font-weight: bold;
}

/* List Items */
.recommended-protection ul {
  list-style-type: none;
  padding: 0;
}

.recommended-protection li {
  font-size: 1rem;
  margin: 8px 0;
  display: flex;
  align-items: center;
}
</style>


