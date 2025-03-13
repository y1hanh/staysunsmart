<template>
  <div>
    <div v-for="(protection, index) in protectionData[uvLevel]" :key="index">
      <div style="padding-top: 10px;">
        <img src="@/assets/checkList.png" style="width: 15px;">
        {{ index }}: {{ protection }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['uvLevel'])
const protectionData = [
  {
    "Sunscreen": "SPF 15 - 30",
    "Reapply": "Every two - three hours",
    "Exposure": "90 - 120 minutes without additional protection"
  }
]
</script>

<style scoped></style>