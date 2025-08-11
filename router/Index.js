// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Páginas
import Home from "../pages/Home.vue";
import Loja from "../pages/Loja.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/loja/:id", name: "Loja", component: Loja, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;