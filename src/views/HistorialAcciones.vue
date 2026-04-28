<template>

    <div class="dashboard-wrapper">
            <!-- Hero Banner -->
    <div class="dashboard-banner">
      <h1 class="banner-title">Historial de Acciones</h1>
      <p class="banner-subtitle">Registro de todas las inserciones, actualizaciones y eliminaciones realizadas.</p>
    </div>

    <!-- Filtros -->
    <div class="filtros-card">
      <h2 class="filtros-title">Historial</h2>
      <div class="filtros-grid">
        <div class="campo-group">
          <label class="campo-label">Operación</label>
          <select class="campo-input">
            <option value="">Todas</option>
            <option value="INSERT">Inserción</option>
            <option value="UPDATE">Actualización</option>
            <option value="DELETE">Eliminación</option>
          </select>
        </div>
        <div class="campo-group">
          <label class="campo-label">Fecha</label>
          <input class="campo-input" type="date" />
        </div>
        <div class="filtros-btns">
          <button class="btn-buscar">Buscar</button>
          <button class="btn-limpiar">Limpiar</button>
        </div>
      </div>
    </div>

    <!-- Tabla de historial -->
    <div class="tabla-card">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Fecha y Hora</th>
              <th>Operación</th>
              <th>Tabla</th>
              <th>ID Registro</th>
              <th>Datos Anteriores</th>
              <th>Datos Nuevos</th>
            </tr>
          </thead>
          <tbody>

            <!-- Fila de ejemplo: Eliminación -->
            <tr>
              <td>
                <div class="fecha-hora">
                  <span class="fecha">2026-04-18</span>
                </div>
              </td>
              <td>
                <span class="badge badge-eliminar">Eliminación</span>
              </td>
              <td>Movimiento</td>
              <td class="id-registro">61</td>
              <td>
                <div class="datos-card datos-anterior">
                  <div class="dato-row"><span class="dato-key">Tipo:</span><span class="dato-val">Gasto</span></div>
                  <div class="dato-row"><span class="dato-key">Categoría:</span><span class="dato-val">Regalo</span></div>
                  <div class="dato-row"><span class="dato-key">Descripción:</span><span class="dato-val">Shein me debe plata de un reembolso.</span></div>
                  <div class="dato-row"><span class="dato-key">Monto:</span><span class="dato-val">$10.000,00</span></div>
                  <div class="dato-row"><span class="dato-key">Fecha:</span><span class="dato-val">2026-04-16</span></div>
                  <div class="dato-row"><span class="dato-key">Es necesario:</span><span class="dato-val">Sí</span></div>
                  <div class="dato-row"><span class="dato-key">Pagado:</span><span class="dato-val">No</span></div>
                </div>
              </td>
              <td>
                <div class="datos-card datos-nuevo datos-na">
                  <span class="na-text">N/A</span>
                </div>
              </td>
            </tr>

            <!-- Fila de ejemplo: Inserción -->
            <tr>
              <td>
                <div class="fecha-hora">
                  <span class="fecha">2026-04-17</span>
                </div>
              </td>
              <td>
                <span class="badge badge-insertar">Inserción</span>
              </td>
              <td>Movimiento</td>
              <td class="id-registro">60</td>
              <td>
                <div class="datos-card datos-na">
                  <span class="na-text">N/A</span>
                </div>
              </td>
              <td>
                <div class="datos-card datos-nuevo">
                  <div class="dato-row"><span class="dato-key">Tipo:</span><span class="dato-val">Ingreso</span></div>
                  <div class="dato-row"><span class="dato-key">Categoría:</span><span class="dato-val">Salario</span></div>
                  <div class="dato-row"><span class="dato-key">Descripción:</span><span class="dato-val">Quincena 1 abril</span></div>
                  <div class="dato-row"><span class="dato-key">Monto:</span><span class="dato-val">$358.250,00</span></div>
                  <div class="dato-row"><span class="dato-key">Fecha:</span><span class="dato-val">2026-04-01</span></div>
                </div>
              </td>
            </tr>

            <!-- Fila de ejemplo: Actualización -->
            <tr>
              <td>
                <div class="fecha-hora">
                  <span class="fecha">2026-04-15</span>
                </div>
              </td>
              <td>
                <span class="badge badge-actualizar">Actualización</span>
              </td>
              <td>Movimiento</td>
              <td class="id-registro">58</td>
              <td>
                <div class="datos-card datos-anterior">
                  <div class="dato-row"><span class="dato-key">Monto:</span><span class="dato-val">$45.000,00</span></div>
                  <div class="dato-row"><span class="dato-key">Pagado:</span><span class="dato-val">No</span></div>
                </div>
              </td>
              <td>
                <div class="datos-card datos-nuevo">
                  <div class="dato-row"><span class="dato-key">Monto:</span><span class="dato-val">$50.000,00</span></div>
                  <div class="dato-row"><span class="dato-key">Pagado:</span><span class="dato-val">Sí</span></div>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    </div>

</template>

<script setup>

</script>

<style scoped>

</style>