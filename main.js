// src/main.js
import { createApp } from "vue";
import { Quasar } from "quasar";
import router from "./router";
import App from "./App.vue";

// Estilos do Quasar e Tailwind
import "quasar/src/css/index.sass";
import "./assets/tailwind.css";

const app = createApp(App);

app.use(router);
app.use(Quasar, { plugins: {} });

app.mount("#app");