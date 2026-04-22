<template>
  <aside class="sidebar">

    <!-- Perfil -->
    <div class="profile-section">

      <div class="avatar">
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="5px" height="5px" fill="currentColor">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
      </div>
      <h2 class="user-name">Beatriz Cataño</h2>
      <span class="user-role">Cliente</span>
      <a href="#" class="logout-btn" @click.prevent="handleLogout">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        Cerrar sesión
      </a>
    </div>

    <div class="divider"></div>

    <!-- PRINCIPAL -->
    <nav class="nav-section">
      <span class="section-label">PRINCIPAL</span>
      <ul class="nav-list">
        <li>
          <a 
            href="#" 
            class="nav-item" 
            :class="{ active: activeMenu === 'dashboard' }"
            @click.prevent="setActive('dashboard')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Dashboard
          </a>
        </li>

        <li>
          <a 
            href="#" 
            class="nav-item" 
            :class="{ active: activeMenu === 'graficos' }"
            @click.prevent="setActive('graficos')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            Graficos y resumen
          </a>
        </li>

        <li>
          <a 
            href="#" 
            class="nav-item" 
            :class="{ active: activeMenu === 'perfil' }"
            @click.prevent="setActive('perfil')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
            Perfil
          </a>
        </li>
        
      </ul>
    </nav>

    <div class="divider"></div>

    <!-- MOVIMIENTOS -->
    <nav class="nav-section">
      <span class="section-label">MOVIMIENTOS</span>
      <ul class="nav-list">
        <li>
          <a 
            href="#" 
            class="nav-item" 
            :class="{ active: activeMenu === 'historial' }"
            @click.prevent="setActive('historial')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="5" y="2" width="14" height="20" rx="2"/>
              <line x1="9" y1="7" x2="15" y2="7"/>
              <line x1="9" y1="11" x2="15" y2="11"/>
              <line x1="9" y1="15" x2="12" y2="15"/>
            </svg>
            Historial de movimientos
          </a>
        </li>
        <li>
          <a 
            href="#" 
            class="nav-item" 
            :class="{ active: activeMenu === 'consultar' }"
            @click.prevent="setActive('consultar')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="11" cy="11" r="7"/>
              <line x1="16.5" y1="16.5" x2="21" y2="21"/>
            </svg>
            Consultar
          </a>
        </li>
      </ul>
    </nav>

    <div class="divider"></div>

  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: 'dashboard' // Dashboard comienza como activo por defecto
    }
  },
  methods: {
    setActive(menu) {
      this.activeMenu = menu
      // Aquí puedes agregar lógica adicional como emitir eventos o cambiar rutas
      this.$emit('menu-changed', menu)
    },
    handleLogout() {
      // Lógica para cerrar sesión
      console.log('Cerrando sesión...')
    }
  }
}
</script>

<style scoped>

</style>