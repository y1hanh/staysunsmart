<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
  <div class=" text-center">
    <div class="row">
      <div class="col-6 home_page_img_container">
        <img class="home_page_img" src="@/assets/home_page_img2.png" />
      </div>
      <div class="col-6 home_page_img_container">
        <button class="check_out_btn" @click="router.push('/personalisation')">Check out here</button>
        <img class="home_page_img" src="@/assets/home_page_img3.png" />
      </div>
    </div>
    <div class="row">
      <div style="height: 30vh;"> Visualization</div>

    </div>
    <div class="row">
      <div class="col-6 home_page_img_container">
        <img class="home_page_img" src="@/assets/home_page_img4.png" />
      </div>
      <div class="col-6 home_page_img_container">
        <img class="home_page_img" src="@/assets/home_page_img5.png" />
      </div>
    </div>

    <div class="row">
      <div class="col-3 home_page_text_container">
        <div class="fw-bold"> Protect Your Skin</div>
      </div>
      <div class="col-6 home_page_img_container">
        <img class="home_page_img" src="@/assets/home_page_img1.png" />
      </div>
      <div class="col-3 home_page_text_container " style="color: #FF9500;">
        <div class="fw-bold"> Protect Your Skin</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home_page_img_container {
  position: relative;
  padding: 0;
}

.home_page_text_container {
  padding: 0;
  background-color: #AFF4C6;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around
}

.home_page_img {
  width: 100%;
  height: 100%;
}

.check_out_btn {
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #007AFF;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.check_out_btn:hover {
  background-color: rgb(2, 118, 154);
}

/* .uv_map {
  width: 80vw;
  height: 90vh;
} */
</style>