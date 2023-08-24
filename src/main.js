import bootstrap from "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.css';
// import router from "./router/routers";



createApp(App).use(bootstrap).mount('#app')
