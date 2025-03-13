import { createRouter, createWebHistory } from 'vue-router'
import impact from '../views/Impact.vue'
import personalisation from '../views/Personalisation.vue'
import uvindex from '../views/UVIndex.vue'
import clothing from '../views/Clothing.vue'
import Subscribe from '../views/Subscribe.vue'
import UvIndexPage from '@/views/UvIndexPage.vue'

const routes = [
  { path: '/', component: UvIndexPage },
  { path: '/impact', component: impact },
  { path: '/personalisation', component: personalisation },
  { path: '/uvindex', component: uvindex },
  {path: '/clothing', component: clothing},
  {path: '/subscribe', component: Subscribe}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
