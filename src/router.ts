import { createMemoryHistory, createRouter } from 'vue-router'
import AddStreamer from './page/AddStreamer.vue'
import Home from './page/Home.vue'
import Login from './page/Login.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/addStreamer', component: AddStreamer },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router