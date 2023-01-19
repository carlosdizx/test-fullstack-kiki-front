import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import router from "@/routes";
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(VueAxios, axios)

app.use(router)

registerPlugins(app)

app.mount('#app')
