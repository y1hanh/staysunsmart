<script setup>
import { onMounted, ref } from 'vue'
import { Loader } from '@googlemaps/js-api-loader';

const API_KEY = "0f2ce572252f4ef9ba455535251103"

let map = ref(null);

async function fetchUV(lat, lng) {
  if(!lat || !lng) return null;
    try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lng}&aqi=yes`);
    const data = await response.json();
    if (data && data["current"]["uv"] !== undefined) {
      return data["current"]["uv"];
    }
  } catch (error) {
    console.error("Error fetching UV data:", error);
  }
  return null;
}

const loader = new Loader({
  apiKey: "AIzaSyDfAbRiEWwIZa32G7UGOkVfMiwzoFwR_eQ",
  version: "weekly",
  libraries: ["visualization"]
});

const userLat = ref(null);
const userLng = ref(null);
const mapOptions = {
  center: {
    lat: userLat.value? userLat.value : -37.9145,
    lng: userLng.value? userLng.value : 145.1275
  },
  zoom: 12
};



const userUV = ref(null)
onMounted(async ()=> {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLat.value = position.coords.latitude;
        userLng.value = position.coords.longitude;
      }
    )
  }

  if(userLat.value && userLng.value) {
    userUV.value = await fetchUV(userLat.value, userLng.value)
  }
})


loader.load()
  .then(async (google) => {
    map.value = new google.maps.Map(document.getElementById("map"), mapOptions);
  })
  .catch(e => {
    console.log(e)
  });
</script>

<template>
  <div>
    <h1>Skin Protection</h1>
    <div class="d-flex p-2">
    <div id="map" style="width: 500px; height:500px"></div>
    <div>user UV: {{ userUV }}</div>
  </div>
  </div>

</template>

<style scoped></style>
