<!-- src/App.vue -->
<template>
  <q-layout view="hHh lpR fFf">
    <!-- Topbar -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="cursor-pointer" @click="$router.push('/')">
          🌍 Aloj — Marketplace
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Conteúdo -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// Layout principal com navegação para Home ao clicar no título
</script>

<style>
/* Ajuste global opcional */
</style>