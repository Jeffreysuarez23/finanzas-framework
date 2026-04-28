<template>
    <div class="dashboard-wrapper">

    <!-- Hero Banner -->
    <div class="dashboard-banner">
      <h1 class="banner-title">Consultar datos</h1>
      <p class="banner-subtitle">Filtra todos los movimientos y deudas en tiempo real por tipo, fecha o mes.</p>
    </div>

    <!-- Filtros -->
    <div class="filtros-card">
      <h2 class="filtros-title">Buscar en el historial</h2>
      <div class="filtros-grid">
        <div class="filtro-group">
          <label class="filtro-label">Buscar en</label>
          <select class="filtro-select">
            <option>Todo</option>
            <option>Movimiento</option>
            <option>Deuda</option>
          </select>
        </div>
        <div class="filtro-group">
          <label class="filtro-label">Tipo de movimiento</label>
          <select class="filtro-select">
            <option>Cualquiera</option>
            <option>Ingreso</option>
            <option>Gasto</option>
            <option>Ahorro</option>
            <option>Gasto necesario</option>
          </select>
        </div>
        <div class="filtro-group">
          <label class="filtro-label">Tipo de deuda</label>
          <select class="filtro-select">
            <option>Cualquiera</option>
            <option>Yo debo</option>
            <option>Me deben</option>
          </select>
        </div>
        <div class="filtro-group">
          <label class="filtro-label">Mes</label>
          <input type="month" class="filtro-input" />
        </div>
        <div class="filtro-group">
          <label class="filtro-label">Fecha desde</label>
          <input type="date" class="filtro-input" />
        </div>
        <div class="filtro-group">
          <label class="filtro-label">Fecha hasta</label>
          <input type="date" class="filtro-input" />
        </div>
      </div>
      <div class="filtros-actions">
        <button class="btn-consultar">Consultar</button>
        <button class="btn-limpiar">Limpiar</button>
      </div>
    </div>

    <!-- Resultados -->
    <div class="resultados-card">
      <div class="resultados-header">
        <span class="resultados-title">Resultados</span>
        <span class="resultados-count">9 registros</span>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Origen</th>
              <th>Tipo</th>
              <th>Subtipo / Concepto</th>
              <th>Descripción</th>
              <th>Monto</th>
              <th>Pagado</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td class="col-fecha">2026-04-18</td>
              <td><span class="pill-origen pill-origen--movimiento">Movimiento</span></td>
              <td><span class="pill-tipo pill-tipo--gasto">Gasto</span></td>
              <td class="col-subtipo">Gasolina</td>
              <td class="col-desc">Gasolina para la moto.</td>
              <td class="col-monto monto-negativo">$23.600,00</td>
              <td><span class="badge-pagado badge-si">Sí</span></td>
            </tr>

            <tr>
              <td class="col-fecha">2026-04-18</td>
              <td><span class="pill-origen pill-origen--deuda">Deuda</span></td>
              <td><span class="pill-tipo pill-tipo--me-deben">Me deben</span></td>
              <td class="col-subtipo">Tarjeta</td>
              <td class="col-desc">shein me debe plata.</td>
              <td class="col-monto monto-positivo">$10.000,00</td>
              <td><span class="badge-pagado badge-no">No</span></td>
            </tr>

            <tr>
              <td class="col-fecha">2026-04-18</td>
              <td><span class="pill-origen pill-origen--movimiento">Movimiento</span></td>
              <td><span class="pill-tipo pill-tipo--gasto">Gasto</span></td>
              <td class="col-subtipo">Comida</td>
              <td class="col-desc">helado con londoño</td>
              <td class="col-monto monto-negativo">$21.000,00</td>
              <td><span class="badge-pagado badge-no">No</span></td>
            </tr>

            <tr>
              <td class="col-fecha">2026-04-16</td>
              <td><span class="pill-origen pill-origen--movimiento">Movimiento</span></td>
              <td><span class="pill-tipo pill-tipo--gasto">Gasto</span></td>
              <td class="col-subtipo">Desayuno</td>
              <td class="col-desc">El dia del mantenimiento desayune.</td>
              <td class="col-monto monto-negativo">$10.000,00</td>
              <td><span class="badge-pagado badge-no">No</span></td>
            </tr>

            <tr>
              <td class="col-fecha">2026-04-16</td>
              <td><span class="pill-origen pill-origen--movimiento">Movimiento</span></td>
              <td><span class="pill-tipo pill-tipo--ingreso">Ingreso</span></td>
              <td class="col-subtipo">Ingreso casual</td>
              <td class="col-desc">ingreso.</td>
              <td class="col-monto monto-positivo">$5.500,00</td>
              <td><span class="badge-pagado badge-na">N/A</span></td>
            </tr>

            <tr>
              <td class="col-fecha">2026-04-16</td>
              <td><span class="pill-origen pill-origen--movimiento">Movimiento</span></td>
              <td><span class="pill-tipo pill-tipo--gasto">Gasto</span></td>
              <td class="col-subtipo">Regalo</td>
              <td class="col-desc">Regalo para isa.</td>
              <td class="col-monto monto-negativo">$30.000,00</td>
              <td><span class="badge-pagado badge-si">Sí</span></td>
            </tr>

            <tr>
              <td class="col-fecha">2026-04-15</td>
              <td><span class="pill-origen pill-origen--deuda">Deuda</span></td>
              <td><span class="pill-tipo pill-tipo--deuda">Deuda</span></td>
              <td class="col-subtipo">Efectivo</td>
              <td class="col-desc">Le debo a londoño por el lubricante de cadena.</td>
              <td class="col-monto monto-negativo">$10.000,00</td>
              <td><span class="badge-pagado badge-si">Sí</span></td>
            </tr>

            <tr>
              <td class="col-fecha">2026-04-15</td>
              <td><span class="pill-origen pill-origen--movimiento">Movimiento</span></td>
              <td><span class="pill-tipo pill-tipo--gasto">Gasto</span></td>
              <td class="col-subtipo">Regalo</td>
              <td class="col-desc">Torta que le dimos a mi madre.</td>
              <td class="col-monto monto-negativo">$21.500,00</td>
              <td><span class="badge-pagado badge-si">Sí</span></td>
            </tr>

            <tr>
              <td class="col-fecha">2026-04-14</td>
              <td><span class="pill-origen pill-origen--movimiento">Movimiento</span></td>
              <td><span class="pill-tipo pill-tipo--ingreso">Ingreso</span></td>
              <td class="col-subtipo">Deuda</td>
              <td class="col-desc">Londoño me pago una parte de la deuda.</td>
              <td class="col-monto monto-positivo">$100.000,00</td>
              <td><span class="badge-pagado badge-na">N/A</span></td>
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