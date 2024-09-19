import { createMemoryHistory, createRouter } from 'vue-router'
import AjouterStreamer from './page/AjouterStreamer.vue'
import Accueil from './page/Accueil.vue'
import Login from './page/Login.vue'

const routes = [
  { path: '/accueil', component: Accueil },
  { path: '/login', component: Login },
  { path: '/addStreamer', component: AjouterStreamer },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router