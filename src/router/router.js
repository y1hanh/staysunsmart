import { createRouter, createWebHistory } from 'vue-router'
import personalisation from '../views/Personalisation.vue'
import clothing from '../views/Clothing.vue'
import UvIndexPage from '@/views/UvIndexPage.vue'
import HomePage from '@/views/HomePage.vue'
import visual from '../views/Visualization.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/personalisation', component: personalisation },
  { path: '/uvindex', component: UvIndexPage },
  {path: '/clothing', component: clothing},
  {path: '/visual', component: visual}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
