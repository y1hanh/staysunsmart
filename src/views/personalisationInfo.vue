<template>
  <div class="sun-safety-container">
    <!-- UV Index -->
    <div class="uv-container">
      <div class="uv-text-box">
        <span class="uv-text">Current UV Index</span>
        <p class="uv-text">Melbourne</p>
      </div>
      <div class="uv-box-container">
        <div class="uv-box">
          <p class="uv-number">10</p>
        </div>
      </div>
      <div class="uv-status-box">
        <span class="uv-status">Very High</span>
        <p class="uv-description">Extra protection needed</p>
      </div>
    </div>
    <!-- Daily Sun Exposure Timeline -->
    <div class="sun-exposure">
      <h4>Daily Sun Exposure Timeline</h4>
      <div class="timeline">
        <span class="safe">6-9 AM</span>
        <span class="caution">9-11 AM</span>
        <span class="high-risk">11 AM - 3 PM</span>
        <span class="caution">3-5 PM</span>
        <span class="safe">5-8 PM</span>
      </div>
      <div class="legend">
        <span class="safe-box"> Safe</span>
        <span class="caution-box">Caution</span>
        <span class="high-risk-box">High Risk</span>
      </div>
    </div>
    <div class="sun-safety-section">
  <!-- Safe Sun Hours -->
  <div class="safe-sun-hours">
    <h3>Safe Sun Hours</h3>
    <ul>
      <li>✅ Safest time: Before 9 AM, After 5 PM</li>
      <li>❌ Avoid sun during: 10 AM - 4 PM</li>
      <li>⚠️ Risk Level: Very High</li>
    </ul>
  </div>

  <!-- Recommended Safety Measures -->
  <div class="safety-measures">
    <h3>Recommended Safety Measures</h3>
    <ul>
      <li>✔️ Wear wide-brimmed hats UPF 50+ clothing</li>
      <li>✔️ Seek shade whenever possible</li>
      <li>✔️ Use physical sunscreen with Zinc Oxide</li>
      <li>✔️ Wear UV-protective sunglasses</li>
    </ul>
  </div>
</div>


  </div>
</template>

<style scoped>
/* Sun Safety Container */
.sun-safety-container {
  width: 100%;
  margin-left: 20px;
}

.uv-container {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 80px;
}


/* UV Text Box */
.uv-text-box {
  background: #0064D0; /* Keep original color */
  padding: 8px;
  border-radius: 15px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80px; /* Ensures same height */
  flex: 1;
}
.uv-text {
  font-size: 0.8rem;
  text-align: left;
}

/* UV Circle Box */
.uv-box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1; /* Same flex as other boxes */
  min-height: 80px; /* Ensures same height */
}
.uv-box {
  background: red;
  border: 2px solid black;
  color: white;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 1;
}

.uv-number {
  font-weight: bold;
  margin: 0;
  padding: 0;
}

/* UV Status Box */
.uv-status-box {
  background: #CFF7D3; /* Different color */
  padding: 8px;
  border-radius: 15px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80px; /* Ensures same height */
  flex: 1;
}

.uv-status {
  font-size: 0.8rem;
  color:red;
  text-align: left;
}

.uv-description {
  font-size: 0.8rem;
  color:black;
  text-align: left;
}

/* Sun Exposure Timeline */
.sun-exposure {
  margin-top: 20px;
}
.timeline span{
  font-size: 0.8rem; /* Decrease text size */
  padding: 3px 20px; /* Reduce padding to make it smaller */
  border-radius: 5px;
}
.safe {
  background: green;
  padding: 5px;
  border-radius: 5px;
}
.caution {
  background: orange;
  padding: 5px;
  border-radius: 5px;
}
.high-risk {
  background: red;
  padding: 5px;
  border-radius: 5px;
}
.legend {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.safe-box {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
}

.safe-box::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: green;
}

.caution-box {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
}

.caution-box::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: orange;
}

.high-risk-box {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
}

.high-risk-box::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: red;
}

/* Container to align the two sections */
.sun-safety-section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

/* Both sections take up equal space */
.safe-sun-hours,
.safety-measures {
  flex: 1;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
}

/* Background Colors */
.safe-sun-hours {
  background: #f4a261;
}

.safety-measures {
  background: #80c8a0;
}
</style>
