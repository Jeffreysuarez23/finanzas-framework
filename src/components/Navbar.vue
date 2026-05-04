<template>
  <div>
    <!-- Botón Hamburguesa Móvil -->
    <button class="mobile-menu-btn" @click="toggleMenu">
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <!-- Overlay Móvil -->
    <div class="sidebar-overlay" v-if="isMenuOpen" @click="toggleMenu"></div>

    <aside class="sidebar" :class="{ 'open': isMenuOpen }">

      <!-- Perfil -->
      <div class="profile-section">
        <div class="avatar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
        <h2 class="user-name">Beatriz Cataño</h2>
        <span class="user-role">Cliente</span>
        <router-link to="/Login" class="logout-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Cerrar sesión
        </router-link>
      </div>

      <div class="divider"></div>

      <!-- PRINCIPAL -->
      <nav class="nav-section">
        <span class="section-label">PRINCIPAL</span>
        <ul class="nav-list">
          <li>
            <router-link to="/" class="nav-item" @click="closeMenu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
              Dashboard
            </router-link>
          </li>

          <li>
            <router-link 
              to="/GraficosResumen" class="nav-item" @click="closeMenu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
              Graficos y resumen
            </router-link>
          </li>

          <li>
            <router-link to="/perfil" class="nav-item" @click="closeMenu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              Perfil
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="divider"></div>

      <!-- MOVIMIENTOS -->
      <nav class="nav-section">
        <span class="section-label">MOVIMIENTOS</span>
        <ul class="nav-list">
          <li>
            <router-link to="/HistorialAcciones" class="nav-item" @click="closeMenu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <line x1="9" y1="7" x2="15" y2="7"/>
                <line x1="9" y1="11" x2="15" y2="11"/>
                <line x1="9" y1="15" x2="12" y2="15"/>
              </svg>
              Historial de acciones
            </router-link>
          </li>
          <li>
            <router-link to="/Consultar" class="nav-item" @click="closeMenu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="11" cy="11" r="7"/>
                <line x1="16.5" y1="16.5" x2="21" y2="21"/>
              </svg>
              Consultar
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="divider"></div>

    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  if (window.innerWidth <= 768) {
    isMenuOpen.value = false
  }
}
</script>

<style scoped>

</style>