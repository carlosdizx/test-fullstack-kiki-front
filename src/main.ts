import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import router from "@/routes";

const app = createApp(App)

app.use(router)

registerPlugins(app)

app.mount('#app')
