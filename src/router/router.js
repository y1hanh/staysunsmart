import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/HomePage.vue'
import impact from '../views/Impact.vue'
import personalisation from '../views/Personalisation.vue'
import uvindex from '../views/UVIndex.vue'

const routes = [
  { path: '/', component: homePage },
  { path: '/impact', component: impact },
  { path: '/personalisation', component: personalisation },
  { path: '/uvindex', component: uvindex },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
