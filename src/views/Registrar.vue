<template>
  <div class="login-bg">
    <div class="login-card">

      <div class="login-header">
        <h1 class="login-title">Registrar cuenta</h1>
      </div>

      <form class="login-body" @submit.prevent>

        <div class="fields-row">
          <div class="field-group">
            <label class="field-label">Nombre</label>
            <input type="text" class="field-input" placeholder="Ingrese su nombre" />
          </div>
          <div class="field-group">
            <label class="field-label">Apellidos</label>
            <input type="text" class="field-input" placeholder="Ingrese sus apellidos" />
          </div>
        </div>

        <div class="fields-row">
          <div class="field-group">
            <label class="field-label">Usuario</label>
            <input type="text" class="field-input" placeholder="Ingrese su usuario" />
          </div>
          <div class="field-group">
            <label class="field-label">Correo electrónico</label>
            <input type="email" class="field-input" placeholder="Ingrese su correo electrónico" />
          </div>
        </div>

        <div class="fields-row">
          <div class="field-group">
            <label class="field-label">Contraseña</label>
            <input type="password" class="field-input" placeholder="Ingrese su contraseña" />
          </div>
          <div class="field-group">
            <label class="field-label">Confirmar Contraseña</label>
            <input type="password" class="field-input" placeholder="Confirme su contraseña" />
          </div>
        </div>

        <button type="submit" class="btn-login">Registrarse</button>

        <div class="login-links">
          <span class="login-link">¿Ya tienes cuenta? <router-link to="/Login">Inicia sesión</router-link></span>
        </div>

      </form>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.login-bg {
  min-height: 100vh;
  background: #060910;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  width: 100%;
  max-width: 660px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 0 60px rgba(59, 130, 246, 0.08);
}

.login-header {
  background: #1a2744;
  padding: 36px 40px 28px;
  text-align: center;
  border-bottom: 1px solid rgba(59, 130, 246, 0.15);
}

.login-title {
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa, #a855f7);
  background-clip: text;
  color: transparent;
}

.login-body {
  background: #151f35;
  padding: 36px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.fields-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label {
  font-size: 0.9rem;
  font-weight: 700;
  color: #e2e8f0;
  text-align: center;
}

.field-input {
  background: #0f172a;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 14px;
  color: #cbd5e1;
  padding: 14px 18px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.field-input::placeholder {
  color: #475569;
}

.field-input:focus {
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-login {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 16px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  width: 50%;
  align-self: center;
  margin-top: 6px;
  transition: all 0.25s;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
}

.btn-login:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.55);
}

.btn-login:active {
  transform: translateY(0);
}

.login-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.login-link {
  font-size: 0.88rem;
  color: #64748b;
  text-decoration: none;
}

.login-link a {
  color: #60a5fa;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.login-link a:hover {
  color: #93c5fd;
}
</style>