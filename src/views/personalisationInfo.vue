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
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  width: 97%;
  height: 80px;
}


/* UV Text Box */
.uv-text-box {
  background: #5C6BC0; /* Keep original color */
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
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
}

/* UV Circle Box */
.uv-box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 80px;
}
.uv-box {
  background: #E57373;
  color: black;
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
  background: #7986CB; /* Different color */
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
  font-size: 1rem;
  color:white;
  font-weight: bold;
}

.uv-description {
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
}

/* Sun Exposure Timeline */
.sun-exposure {
  margin-top: 20px;
}
.timeline span{
  font-size: 0.8rem; /* Decrease text size */
  padding: 3px 85px; /* Reduce padding to make it smaller */
  border-radius: 1px;
}
.safe {
  background: #A5D6A7;
  padding: 5px;
  border-radius: 5px;
}
.caution {
  background: #FFCC80;
  padding: 5px;
  border-radius: 5px;
}
.high-risk {
  background: #FFAB91;
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
  border-radius: 50%;
  background-color: #A5D6A7;
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
  border-radius: 50%;
  background-color: #FFCC80;
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
  border-radius: 50%;
  background-color: #FFAB91;
}


</style>
