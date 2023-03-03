import { createApp } from "vue";
import store from '../store/store'
import App from "./App.vue";
import router from '../routes/router'
import './axios'

const app = createApp(App).use(store).use(router)
app.mount("#app");