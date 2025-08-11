<!-- src/pages/Loja.vue -->
<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-2">{{ loja.name }}</h1>
    <img
      :src="loja.image"
      alt="Imagem da loja"
      class="w-full h-48 object-cover rounded shadow mb-4"
    />

    <p class="text-gray-700 mb-4">{{ loja.description }}</p>

    <!-- Mapa da Loja -->
    <div id="store-map" class="h-64 rounded-lg shadow"></div>

    <!-- Lista de Produtos (MVP simulado) -->
    <h2 class="text-xl font-semibold mt-6 mb-3">Produtos</h2>
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <li
        v-for="prod in loja.products"
        :key="prod.id"
        class="border rounded-lg p-3 shadow hover:shadow-lg transition"
      >
        <img
          :src="prod.image"
          alt="Produto"
          class="w-full h-32 object-cover rounded mb-2"
        />
        <h3 class="font-semibold">{{ prod.name }}</h3>
        <p class="text-gray-600 text-sm">{{ prod.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

// Simulação de dados
const lojasMock = {
  "loja-exemplo": {
    id: "loja-exemplo",
    name: "Loja Exemplo",
    description: "Roupas e acessórios",
    lat: -23.55052,
    lng: -46.633308,
    image: "https://via.placeholder.com/600x300.png?text=Loja+Exemplo",
    products: [
      {
        id: 1,
        name: "Camisa Azul",
        price: "R$ 49,90",
        image: "https://via.placeholder.com/300x150.png?text=Camisa+Azul",
      },
      {
        id: 2,
        name: "Calça Jeans",
        price: "R$ 89,90",
        image: "https://via.placeholder.com/300x150.png?text=Calca+Jeans",
      },
    ],
  },
  "mercado-central": {
    id: "mercado-central",
    name: "Mercado Central",
    description: "Produtos alimentícios frescos",
    lat: -23.551,
    lng: -46.632,
    image: "https://via.placeholder.com/600x300.png?text=Mercado+Central",
    products: [
      {
        id: 1,
        name: "Maçã",
        price: "R$ 4,99/kg",
        image: "https://via.placeholder.com/300x150.png?text=Maca",
      },
      {
        id: 2,
        name: "Leite",
        price: "R$ 6,50",
        image: "https://via.placeholder.com/300x150.png?text=Leite",
      },
    ],
  },
};

const route = useRoute();
const loja = lojasMock[route.params.id] || {};

// Mapa
onMounted(() => {
  if (!loja.lat || !loja.lng) return;

  const map = L.map("store-map").setView([loja.lat, loja.lng], 16);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([loja.lat, loja.lng]).addTo(map).bindPopup(loja.name).openPopup();
});
</script>

<style>
#store-map {
  width: 100%;
}
</style>