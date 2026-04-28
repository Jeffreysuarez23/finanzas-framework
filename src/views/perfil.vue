<template>
    <div class="dashboard-wrapper">

    <div class="dashboard-banner">
      <h1 class="banner-title">Mi Perfil</h1>
      <p class="banner-subtitle">Consulta y actualiza los datos de tu cuenta.</p>
    </div>

    <!-- Información personal -->
    <div class="perfil-card">
      <h2 class="perfil-title">Información personal</h2>

      <div class="perfil-grid">
        <div class="campo-group">
          <label class="campo-label">Nombre</label>
          <input class="campo-input" type="text" value="Jeffrey" />
        </div>
        <div class="campo-group">
          <label class="campo-label">Apellidos</label>
          <input class="campo-input" type="text" value="Suarez Cataño" />
        </div>
        <div class="campo-group">
          <label class="campo-label">Usuario</label>
          <input class="campo-input" type="text" value="lordderiam" />
        </div>
        <div class="campo-group">
          <label class="campo-label">Correo electrónico</label>
          <input class="campo-input" type="email" value="jeffrey232008suarez@gmail.com" />
        </div>
      </div>

      <div class="perfil-grid perfil-grid--pass">
        <div class="campo-group">
          <label class="campo-label">Contraseña actual</label>
          <input class="campo-input" type="password" placeholder="Sólo si cambias contraseña" />
        </div>
        <div class="campo-group">
          <label class="campo-label">Nueva contraseña</label>
          <input class="campo-input" type="password" placeholder="Mínimo 6 caracteres" />
        </div>
        <div class="campo-group">
          <label class="campo-label">Confirmar nueva contraseña</label>
          <input class="campo-input" type="password" placeholder="Repítela aquí" />
        </div>
      </div>

      <div class="perfil-actions">
        <button class="btn-guardar">Guardar cambios</button>
      </div>
    </div>

    <!-- Datos de la cuenta -->
    <div class="perfil-card">
      <h2 class="perfil-title">Datos de la cuenta</h2>

      <div class="perfil-grid">
        <div class="campo-group">
          <label class="campo-label">Rol</label>
          <div class="campo-readonly">Usuario personal</div>
        </div>
        <div class="campo-group">
          <label class="campo-label">Estado</label>
          <div class="campo-readonly">Activo</div>
        </div>
        <div class="campo-group">
          <label class="campo-label">Fecha de registro</label>
          <div class="campo-readonly">2026-04-18 11:06:39</div>
        </div>
        <div class="campo-group">
          <label class="campo-label">Fecha de activación</label>
          <div class="campo-readonly">2026-04-18 11:06:54</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// Sin lógica por ahora — los datos vendrán de PHP
</script>

<style scoped>

</style>