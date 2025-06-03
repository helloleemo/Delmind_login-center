import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ui from '@nuxt/ui/vue-plugin'

const app = createApp(App)

// use
app.use(createPinia())
app.use(router)
app.use(ui)

//mounted
app.mount('#app')
