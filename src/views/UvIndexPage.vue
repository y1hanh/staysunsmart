<script setup>
import { onMounted, ref, watch } from 'vue'
import { Loader } from '@googlemaps/js-api-loader';
import Divider from '@/components/Divider.vue'
import UvIndexRec from '@/components/UvIndexRec.vue'

const API_KEY = "0f2ce572252f4ef9ba455535251103"

async function fetchUV({ lat, lng }) {
  if (!lat || !lng) return null;
  try {
    console.log("fetching UV...")
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
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  version: "weekly",
  libraries: ["visualization"]
});
const melbourne = { lat: -37.8136, lng: 144.9631 }
const currentLocation = ref(null);
const userUV = ref(null);
const map = ref(null);
// var heatmapData = [
//   { location: { lat: -37.8136, lng: 144.9631 }, weight: 78.2 },
//   // { location: { lat: -37.8200, lng: 144.9600 }, weight: 65.4 },
//   // { location: { lat: -37.8150, lng: 144.9700 }, weight: 50.0 }
// ];

async function initMap() {
  const { Map } = await loader.importLibrary("maps");
  const { Marker } = await loader.importLibrary("marker");
  map.value = new Map(document.getElementById("map"), {
    center: melbourne,
    zoom: 13,
  });

  // show user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      new Marker({
        position: pos,
        map: map.value,
        title: "Your Location",
      });
      // marker.setMap(map);
      currentLocation.value = pos
      map.value.setCenter(pos);
    });
  }
}

async function initAutocomplete() {
  const { SearchBox } = await loader.importLibrary("places");
  const { LatLngBounds } = await loader.importLibrary("core");

  const input = document.getElementById("pac-input");

  const searchBox = new SearchBox(input);

  map.value?.addListener("bounds_changed", () => {
    searchBox.setBounds(map.value.getBounds());
  });


  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }


    const bounds = new LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

    map.value.fitBounds(bounds);
  });
}

watch(currentLocation, async () => {
  console.log("changed!")
  userUV.value = await fetchUV(currentLocation.value)
})

window.initAutocomplete = initAutocomplete;

onMounted(() => {
  initMap();
  initAutocomplete()
});

</script>

<template>
  <div class="uv-index-page">
    <div class="map-container">
      <div class="left-side">
        <div>
          <div>Please enter your suburb or postcode for the area you wish to check the UV index in:</div>
          <Divider></Divider>
          <input id="pac-input" class="controls" type="text" placeholder="Search Box">
        </div>

        <div class="uv-info">
          <div>Location:</div>
          <div>UV index level: {{ userUV ? userUV : "loading..." }}</div>
          <div>Recommend Protection</div>
          <UvIndexRec :uvLevel="0" />
        </div>
      </div>
      <div style="flex: 2;">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.uv-index-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.map-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: white;
  border-radius: 10px;
  overflow: hidden;
}

.left-side {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

#pac-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.uv-info {
  background: #ADD8BC;
  padding: 15px;
  border-radius: 5px;
}

.uv-info div {
  margin-bottom: 5px;
  font-size: 16px;
}

#map {
  width: 100%;
  height: 80vh;
}

@media (max-width: 768px) {
  .map-container {
    flex-direction: column;
    width: 95%;
  }

  #map {
    height: 300px;
  }
}
</style>