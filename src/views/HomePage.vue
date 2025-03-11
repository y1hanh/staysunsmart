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


async function initMap() {
  const { Map } = await loader.importLibrary("maps");
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
      currentLocation.value = pos
      map.value.setCenter(pos);
    });
  }
}

async function initAutocomplete() {
  const { SearchBox } = await loader.importLibrary("places");
  const { AdvancedMarkerElement } = await loader.importLibrary("marker");
  const { LatLngBounds } = await loader.importLibrary("core");

  const input = document.getElementById("pac-input");

  const searchBox = new SearchBox(input);

  map.value.addListener("bounds_changed", () => {
    searchBox.setBounds(map.value.getBounds());
  });

  let markers = [];

  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach((marker) => marker.setMap(null));
    markers = [];

    const bounds = new LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      const marker = new AdvancedMarkerElement({
        map,
        position: place.geometry.location,
        title: place.name,
      });

      markers.push(marker);

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
  <div>
    <input id="pac-input" class="controls" type="text" placeholder="Search Box">
    <div id="map" style="height: 400px; width: 100%;" />
    <div>userUV: {{ userUV }}</div>
  </div>
</template>

<style scoped></style>
