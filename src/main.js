import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

const app = createApp(App) // Create the Vue app first
app.use(router) // Then use the router
app.mount('#app') // Finally mount the app to the DOM
