<template>
  <div v-if="$route.path === '/Login'">
    <router-view />
  </div>

  <div v-else-if="$route.path === '/Registrar'">
    <router-view />
  </div>

  <div v-else class="app-layout">
    <Navbar />

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>