<script setup>
import { ref } from "vue";

// Reactive variables
const email = ref("");
const isEmailValid = ref(false);
const touched = ref(false); // Track if user has interacted with input
const subscribed = ref(false); 
const reminderEnabled = ref(false); 

// Email validation function
const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    isEmailValid.value = emailRegex.test(email.value);
};

// Mark field as touched when user leaves the input
const markTouched = () => {
    touched.value = true;
};

// Handle form submission
const subscribe = () => {
    if (isEmailValid.value) {
        subscribed.value = true; 
        alert(`Subscribed with ${email.value}`);
        email.value = ""; // Clear input field
        isEmailValid.value = false;
        touched.value = false; 
    }
};
</script>

<template>
    <div class="page-content"> 
        <div v-if="!subscribed">
            <p>Subscribe to our newsletter to receive updates on UV exposure in your area.</p>
            <form @submit.prevent="subscribe">
                <div class="input-group">
                    <label for="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        v-model="email" 
                        placeholder="Enter your email" 
                        @input="validateEmail"
                        @blur="markTouched" 
                    >
                    <input type="submit" value="Subscribe" :disabled="!isEmailValid">
                </div>
                <p v-if="touched && !isEmailValid" class="error-message">❌ Please enter a valid email address.</p>
            </form>
        </div>

        <!-- Show reminder toggle after subscription -->
        <div v-if="subscribed" class="reminder-section">
            <h1>🎉 Thank you for subscribing!</h1>

            <div class="toggle-container">
                <label class="switch">
                    <input type="checkbox" v-model="reminderEnabled">
                    <span class="slider round"></span>
                </label>
                <span class="toggle-text">Turn on reminders</span>
            </div>

            <p v-if="reminderEnabled" class="reminder-message">✅ Reminder is turned ON.</p>
            <p v-else class="reminder-message">❌ Reminder is turned OFF.</p>
        </div>
    </div>
</template>

<style scoped>
/* Center the form */
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 400px;
    margin: 20px auto;
}

/* Align email input and submit button in the same row */
.input-group {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
}

/* Style the label */
label {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    white-space: nowrap;
}

/* Email input styling */
input[type="email"] {
    flex-grow: 2;
    padding: 10px;
    font-size: 14px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
}

/* Add focus effect */
input[type="email"]:focus {
    border-color: gray;
}

/* Submit button */
input[type="submit"] {
    background-color: darkgray;
    color: white;
    font-size: 14px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    flex-grow: 1;
    min-width: 5px;
}

/* Disabled button style */
input[type="submit"]:disabled {
    background-color: lightgray;
    cursor: not-allowed;
}

/* Change button color on hover */
input[type="submit"]:hover:not(:disabled) {
    background-color: gray;
}

/* Error message styling */
.error-message {
    color: red;
    font-size: 14px;
    font-weight: bold;
}

/* Reminder section */
.reminder-section {
    text-align: center;
    margin-top: 20px;
}



/* Reminder message styling */
.reminder-message {
    font-weight: bold;
    margin-top: 10px;
    color: green;
}

.toggle-text {
    margin-top: 8px; 
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

.switch {
    margin-bottom: 6px; 
    margin-right: 6px; 
}





</style>



