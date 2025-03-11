<script setup>
import { ref } from 'vue'
import { Loader } from '@googlemaps/js-api-loader';
import { convertHeatData } from '@/util/convertHeatData'

const message = ref('Here is all you need to know.')
const loader = new Loader({
  apiKey: "AIzaSyDfAbRiEWwIZa32G7UGOkVfMiwzoFwR_eQ",
  version: "weekly",
  libraries: ["visualization"]
});

const mapOptions = {
  center: {
    lat: -37.9145,
    lng: 145.1275
  },
  zoom: 10
};


let map = ref(null);
loader.load()
  .then(async (google) => {
    console.log(11)
    var heatmapData = await convertHeatData(google.maps.LatLng)
    console.log(heatmapData)
    map.value = new google.maps.Map(document.getElementById("map"), mapOptions);
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData
    });
    heatmap.setMap(map.value);
  })
  .catch(e => {
    console.log(e)
  });

</script>

<template>
  <div>
    <h1>Skin Protection</h1>
    <p>{{ message }}</p>
    <div id="map" style="width: 500px; height:500px"></div>
  </div>

</template>

<style scoped></style>
