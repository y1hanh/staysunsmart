<template>
  <div>
    <div v-for="(protection, index) in protectionData" :key="index">
      <div style="padding-top: 10px;">
        <img src="@/assets/checkList.png" style="width: 15px;">
        {{ index }}: {{ protection }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['uvLevel'])
const protectionDataSet = [
  {
    "Sunscreen": "SPF 15 - 30",
    "Reapply": "Every two - three hours",
    "Max Exposure": "90 - 120 minutes without additional protection"
  },
  {
    "Sunscreen": "SPF 50",
    "Reapply": "Every two - three hours",
    "Clothing": "Slap on a broad-brimmed hat to protect your face, neck, and ears."
  }
]
const protectionData = ref(protectionDataSet[0]);
if (props["uvLevel"] >= 6) {
  protectionData.value = protectionDataSet[1]
}
</script>

<style scoped></style>