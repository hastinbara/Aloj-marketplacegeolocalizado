<!-- src/App.vue -->
<template>
  <q-layout view="hHh lpR fFf">
    <!-- Topbar -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
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
// Layout simples com Quasar
</script>

<style>
/* Aqui pode entrar algum estilo global extra */
</style>