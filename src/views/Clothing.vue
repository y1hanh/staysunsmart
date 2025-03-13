<script setup>
import { ref } from 'vue'
import uvImage from '../assets/image1.png';
import uv2Image from '../assets/image2.png';
import uv3Image from '../assets/image3.png';
import uv4Image from '../assets/image4.png';
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
            <button class="article-btn">Learn more</button>
          </div>
          <div class="article">
            <img :src="uv3Image" alt="UV Protection" class="article-image"/>
            <p class="article-text">Sun safety measures for children</p>
            <button class="article-btn">Learn more</button>
          </div>
          <div class="article">
            <img :src="uv4Image" alt="UV Protection" class="article-image"/>
            <p class="article-text">How to be Sun Smart at Work</p>
            <button class="article-btn">Learn more</button>
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
  padding-left: 0;
  margin-left: 0;
  margin-bottom: 0;
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
  min-height: 100vh;
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


</style>



