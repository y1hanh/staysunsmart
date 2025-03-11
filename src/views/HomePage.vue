<script setup>
import { ref } from 'vue'
import { Loader } from '@googlemaps/js-api-loader';

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
  .then((google) => {
    var heatmapData = [
      new google.maps.LatLng(-37.782, 145.1275),
      new google.maps.LatLng(-37.782, 145.2),
      new google.maps.LatLng(-37.782, 145.3),
      new google.maps.LatLng(-37.782, 145.01),
      new google.maps.LatLng(-37.782, 145.4),
      new google.maps.LatLng(-37.782, 145.8),
      new google.maps.LatLng(-37.782, 144.8),
    ];

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
