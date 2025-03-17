<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

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
      <div class="col-6 home_page_img_container">
        <img class="home_page_img" src="@/assets/home_page_img4.png" />
      </div>
      <div class="col-6 home_page_img_container">
        <img class="home_page_img" src="@/assets/home_page_img5.png" />
      </div>
    </div>

    <div class="row">
      <div class="col-6 home_page_img_container">
        <img class="home_page_img" src="@/assets/home_page_img1.png" />
      </div>
      <div class="col-6 home_page_text_container " style="color: #FF9500;">
        <div class="fw-bold " style="font-size: 2rem; color: white;"> UV impacts to your skin</div>
        <div class="text-desc" style="font-size: 1.5rem; color: white;"> UV radiation damages the DNA in skin cells
          leading to muttations that increase skin cancer risk.</div>
          <button class="damage_btn" @click="router.push('/visual')">Learn more</button>
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
  background-color: #61ABBE;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center
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

.damage_btn {
  background-color: white;
  color: #61ABBE;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  width: 150px;
  height: 30px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
}

.damage_btn:hover {
  background-color: rgb(2, 118, 154);
}


/* .uv_map {
  width: 80vw;
  height: 90vh;
} */
</style>
