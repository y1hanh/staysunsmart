import data from "@/assets/data.json"

export async function convertHeatData(googleFormatter) {
  const heatData = []
  for(const ele of data) {
    heatData.push({
      location: new googleFormatter(ele["Lat"], ele["Lon"]), weight: ele["UV_Index"]
    })
  }
  return heatData;
}