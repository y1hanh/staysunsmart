<script setup>
import { ref } from "vue";
import PersonalisationInfo from "../views/personalisationInfo.vue";
import skin from "../assets/skin.png";


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
      <div class="text-dropdown-container">
        <p class="personalized-title">Personalised Sun Safety Schedule</p>
        <p class="personalized-des">Get customised sun protection recommendations based on your skin type.</p>

        <div class="dropdown-container">
            <label for="skinType" class="dropdown-label">Select Your Skin Type:</label>
            <img :src="skin" alt="Skin Type" class="skin-image" />
            <select id="skinType" class="styled-dropdown" v-model="selectedSkin">
              <option value="" disabled selected>Click here to select your skin type..</option>
              <option v-for="skin in skinTypes" :key="skin.value" :value="skin.value">
                {{ skin.roman }} <!-- Display Roman numeral -->
              </option>
            </select>
            <p class="info-text">Your skin type determines how quickly you burn and how much protection you need.</p>
            <div v-if="selectedSkin" class="selected-skin-box">

              <p class="select-box-title">Your Personalised Sun Safety Schedule</p>
              <!--  <p class="select-box-choose">{{ getSelectedSkin()?.roman }}</p> -->
              <p class="select-box-info">Based on your skin type, we have customised recommemdation to help you stay safe in the sun.</p>
            </div>
        </div>
      </div>
      <div class="info-container">
        <PersonalisationInfo v-if="selectedSkin" />
      </div>

      <div class="sun-safety-container">
        <div class="protection-row">
          <div v-if="selectedSkin" class="recommended-protection">
          <p class="protection-title">Recommended Protection</p>
          <ul>
            <li v-for="item in getSelectedSkin()?.protection" :key="item.text">
              {{ item.icon }} {{ item.text }}
            </li>
          </ul>
        </div>
        <div v-if="selectedSkin" class="safe-sun-hours">
          <p class="protection-title">Safe Sun Hours</p>
          <ul>
            <li>✅ Safest time: Before 9 AM, After 5 PM</li>
            <li>❌ Avoid sun during: 10 AM - 4 PM</li>
            <li>⚠️ Risk Level: Very High</li>
          </ul>
        </div>

        <!-- Recommended Safety Measures -->
        <div v-if="selectedSkin" class="safety-measures">
          <p class="protection-title">Recommended Safety Measures</p>
          <ul>
            <li>✔️ Wear wide-brimmed hats: SPF 50+</li>
            <li>✔️ Seek shade whenever possible</li>
            <li>✔️ Use physical sunscreen with Zinc Oxide</li>
            <li>✔️ Wear UV-protective sunglasses</li>
          </ul>
        </div>
      </div>

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
  width: 100%;
  min-height: 100vh;
  background: white;
  border-radius: 10px;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
}

.text-dropdown-container {
  width: 100%;
  padding: 20px;
  text-align: left;
}

.personalized-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.personalized-des {
  font-size: 1rem;
  margin-bottom: 10px;
}

/*  Sun Safety Info */
.info-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  text-align: left;
  margin-top: 20px;
  align-items: center;
}


/* Dropdown Section */
.dropdown-container {
  background: #1ABAAC; /* Green background */
  padding: 40px;
  border-radius: 15px;
  text-align: left;
  color: white;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

/* Label - Always Align Left */
.dropdown-label {
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  text-align: left;
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
  text-align: center;
  color: white;
  font-size: 1rem;
  font-weight: bold;

}

.select-box-title {
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: left;
  color: white;
}

/* .select-box-choose {
  font-size: 0.8rem;
  margin-bottom: 10px;
  text-align: left;
  color:#FDD3D0;
} */

.select-box-info {
  font-size: 0.8rem;
  margin-bottom: 10px;
  text-align: left;
  color: white;
}

/* Recommended Protection Section */
.recommended-protection,.safe-sun-hours,
.safety-measures {
  padding: 20px;
  border-radius: 15px;
  max-width: 33%;
  margin: 20px auto;
  text-align: left;
  min-height: 300px
}

/* Recommended Protection Title */
.protection-title {
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 2px solid #D9D3BD;
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

.sun-safety-container {
  width: 100%;
  margin-left: 20px;
}

.protection-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2px;
  width: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
}

.recommended-protection ul,
.safe-sun-hours ul,
.safety-measures ul {
  list-style-type: none; /* Removes bullet points */
  padding: 0; /* Removes default padding */
  margin: 0; /* Removes default margin */
}



/* Background Colors */
.recommended-protection {
  background: #FFF8E1;
  border-left: 5px solid #FFECAE;

}
.safe-sun-hours {
  background: #FFE0B2;
  border-left: 5px solid #FFB74D;
}

.safety-measures {
  background: #E0F2F1;
  border-left: 5px solid #56B9B0;
}

.skin-image {
  width: 100%;
  max-width: 400px;
  height: 150px;
  margin-top: 20px;
}
</style>


