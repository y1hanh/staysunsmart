<script setup>
import { onMounted, ref, watch } from 'vue'
import { Loader } from '@googlemaps/js-api-loader';

const API_KEY = "0f2ce572252f4ef9ba455535251103"

async function fetchUV({ lat, lng }) {
  if (!lat || !lng) return null;
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

  // const heatmap = new HeatmapLayer({
  //   data: heatmapData,
  //   radius: 40,
  //   opacity: 0.7,
  //   maxIntensity: 100
  // });
  // console.log(heatmap)
  // heatmap.setMap(map);
}

async function initAutocomplete() {
  const { SearchBox } = await loader.importLibrary("places");
  const { LatLngBounds } = await loader.importLibrary("core");

  const input = document.getElementById("pac-input");

  const searchBox = new SearchBox(input);

  map.value.addListener("bounds_changed", () => {
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
  userUV.value = await fetchUV(currentLocation.value)
})

window.initAutocomplete = initAutocomplete;

onMounted(() => {
  initMap();
  initAutocomplete()
});

</script>

<template>
  <div class="home-page">
    <div class="map-container">
      <div style="position: relative; flex: 2;">
        <input id="pac-input" class="controls" type="text" placeholder="Search Box">
        <div id="map"></div>
      </div>
      <div class="uv-info">
        <div>Your location UV</div>
        <div>UV: {{ userUV ? userUV : "loading..." }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.map-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
}

#map {
  flex: 2;
  height: 70vh;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.controls {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 300px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.uv-info {
  flex: 1;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 250px;
}

.uv-info div {
  font-size: 18px;
  font-weight: bold;
}
</style>
