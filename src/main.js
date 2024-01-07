import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BrainPlugin from "@/plugins/brain-plugin";

const app = createApp(App)

app.use(router)
app.use(BrainPlugin, {store, router})

app.mount('#app')
