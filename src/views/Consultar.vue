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
.consultar-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ── Filtros card ── */
.filtros-card {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  backdrop-filter: blur(10px);
}

.filtros-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #60a5fa;
  margin: 0;
}

.filtros-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.filtro-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.filtro-label {
  font-size: 0.85rem;
  font-weight: bold;
  color: #94a3b8;
  letter-spacing: 0.04em;
}

.filtro-select,
.filtro-input {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 10px;
  color: #cbd5e1;
  padding: 10px 14px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
  appearance: auto;
  color-scheme: dark;
}

.filtro-select:focus,
.filtro-input:focus {
  border-color: rgba(59, 130, 246, 0.6);
}

.filtros-actions {
  display: flex;
  gap: 12px;
}

.btn-consultar {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: #fff;
  border: none;
  border-radius: 13px;
  padding: 12px 28px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-consultar:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.45);
}

.btn-limpiar {
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 13px;
  padding: 12px 28px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-limpiar:hover {
  background: rgba(59, 130, 246, 0.2);
}

/* ── Resultados ── */
.resultados-card {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 20px;
  padding: 28px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.resultados-header {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.resultados-title {
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #60a5fa, #a855f7);
  background-clip: text;
  color: transparent;
}

.resultados-count {
  font-size: 0.85rem;
  color: #475569;
  font-weight: 500;
}

/* ── Tabla ── */
.table-container {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(59, 130, 246, 0.15);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

thead tr {
  background: linear-gradient(135deg, #1e3a5f, #1a3356);
}

thead th {
  padding: 13px 16px;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 700;
  color: #60a5fa;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

tbody tr {
  border-top: 1px solid rgba(59, 130, 246, 0.08);
  transition: background 0.15s;
}

tbody tr:nth-child(even) {
  background: rgba(30, 41, 59, 0.3);
}

tbody tr:hover {
  background: rgba(59, 130, 246, 0.08);
}

tbody td {
  padding: 13px 16px;
  color: #cbd5e1;
  vertical-align: middle;
}

/* ── Columnas ── */
.col-fecha {
  font-family: monospace;
  font-size: 0.82rem;
  color: #94a3b8;
  white-space: nowrap;
}

.col-subtipo {
  font-weight: 600;
  color: #e2e8f0;
}

.col-desc {
  color: #94a3b8;
  font-size: 0.85rem;
}

.col-monto {
  font-weight: 700;
  font-size: 0.95rem;
  white-space: nowrap;
  text-align: right;
}

/* ── Pills origen ── */
.pill-origen {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.73rem;
  font-weight: 600;
  white-space: nowrap;
}

.pill-origen--movimiento {
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.pill-origen--deuda {
  background: rgba(234, 179, 8, 0.12);
  color: #fbbf24;
  border: 1px solid rgba(234, 179, 8, 0.3);
}

/* ── Pills tipo ── */
.pill-tipo {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.73rem;
  font-weight: 600;
  white-space: nowrap;
}

.pill-tipo--ingreso {
  background: rgba(74, 222, 128, 0.1);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.25);
}

.pill-tipo--gasto {
  background: rgba(248, 113, 113, 0.1);
  color: #f87171;
  border: 1px solid rgba(248, 113, 113, 0.25);
}

.pill-tipo--ahorro {
  background: rgba(167, 139, 250, 0.12);
  color: #a78bfa;
  border: 1px solid rgba(167, 139, 250, 0.3);
}

.pill-tipo--deuda {
  background: rgba(234, 179, 8, 0.12);
  color: #fbbf24;
  border: 1px solid rgba(234, 179, 8, 0.3);
}

.pill-tipo--me-deben {
  background: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.25);
}

.pill-tipo--gasto-necesario {
  background: rgba(251, 146, 60, 0.1);
  color: #fb923c;
  border: 1px solid rgba(251, 146, 60, 0.25);
}

/* ── Montos ── */
.monto-positivo { color: #4ade80; }
.monto-negativo { color: #f87171; }
.monto-ahorro   { color: #a78bfa; }
.monto-info     { color: #60a5fa; }

/* ── Badges pagado ── */
.badge-pagado {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.badge-si {
  background: rgba(74, 222, 128, 0.15);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.3);
}

.badge-no {
  background: rgba(248, 113, 113, 0.15);
  color: #f87171;
  border: 1px solid rgba(248, 113, 113, 0.3);
}

.badge-na {
  background: rgba(100, 116, 139, 0.15);
  color: #64748b;
  border: 1px solid rgba(100, 116, 139, 0.25);
}
</style>