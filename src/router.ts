import { createMemoryHistory, createRouter } from 'vue-router'
// @ts-ignore
import AjouterStreamer from './page/AjouterStreamer.vue'
// @ts-ignore
import Accueil from './page/Accueil.vue'
// @ts-ignore
import Login from './page/Login.vue'
import { authGuard } from './auth'

const routes = [
  { path: '/', redirect: '/accueil' },
  { path: '/accueil', component: Accueil, beforeEnter: authGuard },
  { path: '/login', component: Login },
  { path: '/addStreamer', component: AjouterStreamer, beforeEnter: authGuard },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router