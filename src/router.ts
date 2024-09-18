import { createMemoryHistory, createRouter } from 'vue-router'
import Bet from './page/Bet.vue'
import Accueil from './page/Accueil.vue'

const routes = [
  { path: '/', component: Accueil },
  { path: '/bet', component: Bet },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router