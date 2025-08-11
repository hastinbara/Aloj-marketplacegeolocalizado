<!-- src/pages/Home.vue -->
<template>
  <div class="p-4">
    <!-- Mapa -->
    <div id="map" class="h-96 rounded-lg shadow mb-6"></div>

    <!-- Lista de Lojas -->
    <h2 class="text-xl font-bold mb-3">🛍️ Lojas</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="store in stores"
        :key="store.id"
        class="border rounded-lg p-4 shadow hover:shadow-lg transition"
      >
        <img
          :src="store.image"
          alt="Logo da loja"
          class="w-full h-32 object-cover rounded"
        />
        <h3 class="text-lg font-semibold mt-2">{{ store.name }}</h3>
        <p class="text-gray-600 text-sm">{{ store.description }}</p>
        <a
          :href="`/loja/${store.id}`"
          class="block mt-3 text-blue-500 hover:underline"
        >
          Ver Loja
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";

// Dados simulados (MVP)
const stores = [
  {
    id: "loja-exemplo",
    name: "Loja Exemplo",
    description: "Roupas e acessórios",
    lat: -23.55052,
    lng: -46.633308,
    image: "https://via.placeholder.com/300x150.png?text=Loja+Exemplo",
  },
  {
    id: "mercado-central",
    name: "Mercado Central",
    description: "Produtos alimentícios",
    lat: -23.551,
    lng: -46.632,
    image: "https://via.placeholder.com/300x150.png?text=Mercado+Central",
  },
];

onMounted(() => {
  // Criar mapa
  const map = L.map("map").setView([-23.55052, -46.633308], 14);

  // Adicionar tiles do OpenStreetMap (sem custo)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Adicionar marcadores
  stores.forEach((store) => {
    const marker = L.marker([store.lat, store.lng]).addTo(map);
    marker.bindPopup(`<b>${store.name}</b><br>${store.description}`);
  });
});
</script>

<style>
#map {
  width: 100%;
}
</style>