import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

createApp(App).use(router).mount("#app");
axios.defaults.baseURL = "https://localhost:8000";
