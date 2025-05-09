import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css"; // Importing the main CSS file

const app = createApp(App);

/** instance */
app.use(router);

/** mount */ app.mount("#app");
