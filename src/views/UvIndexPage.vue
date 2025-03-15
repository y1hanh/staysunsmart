<script setup>
import { onMounted, ref, watch } from 'vue'
import { Loader } from '@googlemaps/js-api-loader';
import Divider from '@/components/Divider.vue'
import UvIndexRec from '@/components/UvIndexRec.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const API_KEY = "0f2ce572252f4ef9ba455535251103"
const melbourne = { lat: -37.8136, lng: 144.9631 }
const currentLocation = ref(null);
const location = ref(null);
const userUV = ref(null);
const map = ref(null);

async function fetchUV({ lat, lng }) {
  if (!lat || !lng) return null;
  try {
    console.log("fetching UV...")
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lng}&aqi=yes`);
    const data = await response.json();
    if (data && data["current"]["uv"] !== undefined) {
      location.value = data["location"]["name"]
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


async function initMap() {
  const { Map } = await loader.importLibrary("maps");
  const { Marker } = await loader.importLibrary("marker");
  map.value = new Map(document.getElementById("map"), {
    center: melbourne,
    zoom: 13,
  });

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
      currentLocation.value = { lat: place.geometry.location.lat().toString(), lng: place.geometry.location.lng().toString() };
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
  console.log("location changed!")
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
          <div>Location: {{ location }}</div>
          <div>
            <span>UV index level: </span>
            <span :class="{ highUV: userUV > 6 }"> {{ userUV ? userUV : "loading..." }} {{ userUV > 6 ?
              "(High)" : "" }}</span>
          </div>
          <div>Recommend Protection</div>

          <UvIndexRec v-if="userUV >= 3" :uvLevel="userUV" />
          <div v-else>No protection needed</div>
          <Divider></Divider>
          <button class="router_to_personalisation" @click="router.push('/personalisation')">Get personalised
            suggestion</button>
        </div>
      </div>
      <div style=" flex: 2;">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.highUV {
  color: red;
}

.router_to_personalisation {
  border: none;
  background-color: #F28C28;
  text-decoration: none;
  color: #E9F2FF;
  border-radius: 4px;
  padding: 7px 25px;
  font-family: 'Itim', regular;
  font-size: 18px;
  transition: 0.2s;
}

.router_to_personalisation:hover {
  background-color: #F28C28;
}

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
  height: 80vh;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #ECFDF5;
}

#pac-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.uv-info {
  background: #D4EEDD;
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