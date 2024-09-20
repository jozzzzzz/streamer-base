import { createApp } from 'vue'
import router from './router.ts'
// @ts-ignore
import App from './App.vue'
import './style.css'

createApp(App)
  .use(router)
  .mount('#app')