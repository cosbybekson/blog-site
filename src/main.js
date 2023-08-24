import bootstrap from "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.css';


createApp(App).use(bootstrap).mount('#app')
