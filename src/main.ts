import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './style.css'
import App from './App.vue'

import Landing from './pages/Landing.vue'
import Members from './pages/Members.vue'
import Photos from './pages/Photos.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/members', component: Members },
  { path: '/photos', component: Photos },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')