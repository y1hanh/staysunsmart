<script setup>
import { ref } from 'vue'
import uvImage from '../assets/image1.png';
import uv2Image from '../assets/image2.png';
import uv3Image from '../assets/image3.png';
import uv4Image from '../assets/image4.png';
import UvBrandCard from '../components/UVClothing.vue';
</script>

<template>
  <div class="cloth-page">
    <div class="container">
      <div class="text-container">
        <p class="text-title">
          <span class="text-skin">Protect Your Skin,</span>
          <span class="text-health"> Protect Your Health.</span>
        </p>
        <p class="text-description">
          Everything you need to know about UV protective clothing and why it matters for your long-term health.
        </p>
      </div>

      <!-- Image container -->
      <div class="image-container">
        <img :src="uvImage" alt="UV Protection" class="image-style"/>
        <div class="image-content">
          <div class="text-link">Stay SunSmart: Simple Steps to Protect Your Skin.</div>
          <div class="button-container">
            <button class="learn-more-btn">Learn More</button>
            <button class="suggestion-btn">Get Personalized Suggestion</button>
          </div>
        </div>
      </div>
      <!-- Image container -->
      <div class="image2-container">
        <div class="feature-continer">Featured Articles -</div>
        <div class="articles-container">
          <div class="article">
            <img :src="uv2Image" alt="UV Protection" class="article-image"/>
            <p class="article-text">UPF VS SPF</p>
            <a href=https://www.cancer.org.au/cancer-information/causes-and-prevention/sun-safety/be-sunsmart/sunsmart-at-work
  class="article-btn">Learn more</a>
          </div>
          <div class="article">
            <img :src="uv3Image" alt="UV Protection" class="article-image"/>
            <p class="article-text">Sun safety measures for children</p>
            <a href=https://raisingchildren.net.au/newborns/safety/outdoor-sun-safety/sun-safety
 class="article-btn">Learn more</a>
          </div>
          <div class="article">
            <img :src="uv4Image" alt="UV Protection" class="article-image"/>
            <p class="article-text">How to be Sun Smart at Work</p>
            <a href=https://www.cancer.org.au/cancer-information/causes-and-prevention/sun-safety/be-sunsmart/sunsmart-at-work
 class="article-btn">Learn more</a>
          </div>
        </div>
      </div>
      <!-- third part -->
      <div class="third-container">
        <p class="third-title">Where to Find Quality UV Protective Clothing</p>
        <div class="brand-container">
          <UvBrandCard
            title="Coolibar"
            description="Pioneer in UPF 50+ clothing for the whole family"
            link="https://www.coolibar.com/?srsltid=AfmBOor-PaVcJf_q8m96PHitEZhwaWIK9_zKaxQNbNrsgucnC_eZg_Gq"
            linkText="www.coolibar.com"
          />
          <UvBrandCard
            title="Columbia"
            description="Outdoor brand with Omni-Shade UPF protection technology"
            link="https://www.columbiasportswear.com.au/categories/84-omni-shade-technology?ccsort=newin&filter-gender=14&filter-gender=13&filter-gender=15"
            linkText="www.columbia.com"
          />
          <UvBrandCard
            title="UV Skinz"
            description="Lightweight UPF 50+ clothing with focus on comfort"
            link=" https://www.uvskinz.com/?srsltid=AfmBOooX-BKBfVhdhIre5EfMs_Z7QH8Rw4DjjTi52I8fXOyAwLS7g1D_"
            linkText="www.uvskinz.com"
          />
          <UvBrandCard
            title="Solbari"
            description="Lightweight UPF 50+ clothing with focus on comfort"
            link="https://www.solbari.com.au/?gad_source=1&gclid=Cj0KCQjw4cS-BhDGARIsABg4_J2BCgdfQcb1OFi_4tYOxkso0UzSJbYm-KYvyKHsMv2ryVsBNC8MOOgaAn0gEALw_wcB"
            linkText="www.uvskinz.com"
          />
        </div>
        <div class="fourth-container">
          <div class="shopping-upf-wrapper">
            <div class="shopping-tips-container">
              <p class="shopping-tips-title">Shopping Tips</p>
              <p class="shopping-tips-text">
                Always check the UPF rating on the label. For maximum protextion, look for UPF 50+ certified by
                organizations like the Skin Cancer Foundation.
              </p>
            </div>
            <div class="shopping-item-container">
              <p class="shopping-item-title">What to look for When Shopping for UPF Clothing</p>
              <ul class="shopping-list">
                <li>
                  <strong>🏆 Certification</strong>
                  <p class="list-des">Look for official UPF certification and testing from recognized organizations like AATCC or the Skin Cancer Foundation.</p>
                </li>
                <li>
                  <strong>👕 Coverage</strong>
                  <p class="list-des">Choose designs with extended coverage (longer sleeves, higher necklines) for sensitive areas like shoulders and chest.</p>
                </li>
                <li>
                  <strong>🔄 Versatility</strong>
                  <p class="list-des">Pick pieces that can be layered or used for multiple activities and different weather conditions.</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="upf-container">
            <p class="upf-title">Factors That Affect UPF Rating:</p>
            <ul class="upf-list">
              <li><strong>Fabric Type </strong><p class="upf-des">Synthetic fibers like polyester provide better protection than cotton.</p></li>
              <li><strong>Construction</strong> <p class="upf-des">Tighter weaves allow less UV penetration.</p></li>
              <li><strong>Color Darker </strong><p class="upf-des">colors absorb more UV radiation.</p></li>
              <li><strong>Treatments</strong> <p class="upf-des">Special UV-absorbing treatments enhance protection.</p></li>
            </ul>
          </div>
          <div class="upf-rating-container">
            <p class="upf-rating-title">Understanding UPF Ratings</p>
            <div class="upf-rating-list">

              <div class="upf-rating-item">
                <div class="upf-badge upf-low">UPF 15-24</div>
                <div class="upf-text">
                  <p class="upf-protection">Good Protection</p>
                  <p class="upf-detail">Blocks 93.3-95.8% of UV radiation</p>
                </div>
              </div>

              <div class="upf-rating-item">
                <div class="upf-badge upf-medium">UPF 25-39</div>
                <div class="upf-text">
                  <p class="upf-protection">Very Good Protection</p>
                  <p class="upf-detail">Blocks 96-97.4% of UV radiation</p>
                </div>
              </div>

              <div class="upf-rating-item">
                <div class="upf-badge upf-high">UPF 40+</div>
                <div class="upf-text">
                  <p class="upf-protection">Excellent Protection</p>
                  <p class="upf-detail">Blocks 97.5% or more of UV radiation</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<style scoped>
/* Page Styling */
.cloth-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  font-family: Arial, sans-serif;

}

/* Center the container */
.container {
  display: flex;
  flex-direction: column; /* Stack elements */
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: white;
  border-radius: 10px;
  overflow-y: auto;
}

/* Text Section */
.text-container {
  text-align: center;
  max-width: 800px;
  margin-bottom: 20px;
}

/* Title Styling */
.text-title {
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
}

/* Text Colors */
.text-skin {
  color: black;
}

.text-health {
  color: #D4822B;
}

.text-description {
  font-size: 1rem;
  color: #333;
  max-width: 800px;
  line-height: 1.5;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
}

/* Image Styling */
.image-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #52B4CE;
}

.image-style {
  width: 50%;
  height: auto;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  margin-left: 0;
}

/* Right-side Content */
.image-content {
  width: 50%; /* Takes up remaining space */
  color: black;
  padding-left: 20px;
  text-align: center;
}

.text-link {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
/* Buttons */
.learn-more-btn, .suggestion-btn {
  padding: 6px 13px;
  border: none;
  border-radius: 10px;
  font-size: 0.8rem;
  margin-top: 10px;
  cursor: pointer;
  min-width: 100px;
  text-align: center;
  display: inline-block;
  font-family: "menlo", sans-serif;
  font-weight: bold;
}

.learn-more-btn {
  background: #007BFF;
  color: black;
}

.suggestion-btn {
  background: #FBC02D;
  color: black;
  margin-left: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

/* Image2 Section */
.image2-container {
  width: 100%;
  flex-direction: column; /* Stack items */
  display: flex;
  justify-content: flex-start;
  background: #E6F2F7;
  min-height: 50vh;
  padding-top: 20px;
}


.feature-continer {
  font-size: 1rem;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
}

.articles-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1px;
  margin-left: 20px;
  margin-top: 20px;
}

/* Individual Article Box */
.article {
  text-align: center;
}

.article-text {
  font-size: 1rem;
  margin-top: 10px;
}


.article-image {
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

.article-btn {
  padding: 6px 13px;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  background: #007BFF;
  color: white;
  margin-top: 1px;
  font-weight: bold;
  color: black;
}

.article-btn:hover {
  background: #0056b3;
}

/* 3rd Section */
.third-container {
  display: flex;
  flex-wrap: wrap; /* Allows content to wrap if needed */
  justify-content: space-between; /* Distributes content */
  align-items: flex-start;
  width: 100%;
  background: #ECF6F3;
}
.third-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
}
.brand-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.fourth-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

}

.shopping-upf-wrapper {
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 10px;
}

.shopping-tips-container {
  margin-top: 20px;
  margin-left: 20px;
  padding: 3px 10px;
  border-radius: 15px;
  background: #FEFCE8;
  border: 2px solid #FACC14;
}

.shopping-tips-title {
  font-size: 1rem;
  font-weight: bold;
  color: #854D0F;
}

.shopping-tips-text {
  font-size: 0.8rem;
  color: #333;
}

.shopping-item-container {
  margin-top: 10px;
  margin-left: 20px;
  padding: 3px 10px;
  border-radius: 15px;
  background: #EFFDFA;
  border: 3px solid #CBFBF1;
}

.shopping-item-title {
  font-size: 1rem;
  font-weight: bold;
  color: #0F5E59;
}

.shopping-list {
  color: #0F5E59;
}

.list-des {
  font-size: 0.8rem;
  color: #333;
}

/* UPF Section */
.upf-container {
  width: 25%;
  align-items: start;
  padding: 20px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 15px;
  border: 3px solid #CFFAF1;
  text-align: left;
  align-items: flex-start;
}

.upf-title {
  font-size: 1rem;
  font-weight: bold;

}

.upf-list {
  color: #0F5E59;
  font-size: 1rem;
  font-weight: bold;
  list-style-type: none;
  text-align: left;
  padding-left: 0;
}

.upf-des {
  font-size: 0.8rem;
  color: #333;
}

/* UPF Rating Section */
.upf-rating-container{
  width: 25%;
  align-items: start;
  padding: 20px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 15px;
  border: 3px solid #CFFAF1;
  text-align: left;
  align-items: flex-start;
}

.upf-rating-title {
  font-size: 1rem;
  font-weight: bold;
 }

.upf-rating-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
}

.upf-rating-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.upf-badge {
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
}

.upf-low {
  background: #FDEFD6;
  color: #B55D15;
}

.upf-medium {
  background: #FEF9CD;
  color: #A68C1D;
}

.upf-high {
  background: #E1F6E9;
  color: #2B7A3F;
}

.upf-text {
  display: flex;
  flex-direction: column;
}

.upf-protection {
  font-size: 1rem;
  font-weight: bold;
  color: #0F5E59;
  margin-bottom: 2px;
}

.upf-detail {
  font-size: 0.8rem;
  color: #555;
}

</style>



