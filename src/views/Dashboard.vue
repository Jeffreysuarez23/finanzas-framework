<template>
  <div class="dashboard-wrapper">

    <!-- Hero Banner -->
    <div class="dashboard-banner">
      <h1 class="banner-title">Dashboard Personal</h1>
      <p class="banner-subtitle">Controla tus ingresos y gastos en un solo lugar.</p>
    </div>

    <!-- Tarjetas principales -->
    <div class="cards-grid">
      <div class="card">
        <span class="card-label">TOTAL INGRESOS</span>
        <span class="card-value">$716.500,00</span>
      </div>
      <div class="card">
        <span class="card-label">TOTAL GASTOS</span>
        <span class="card-value">$229.000,00</span>
      </div>
      <div class="card">
        <span class="card-label">TOTAL AHORRO</span>
        <span class="card-value">$50.000,00</span>
      </div>
      <div class="card">
        <span class="card-label">GASTOS NECESARIOS PENDIENTES</span>
        <span class="card-value">$4.000,00</span>
      </div>
    </div>

    <!-- Balance -->
    <div class="cards-grid">
      <div class="card">
        <span class="card-label">BALANCE</span>
        <span class="card-value">$10.400,00</span>
      </div>
    </div>

    <!-- Carrusel de meses -->
    <div class="month-selector">
      <div class="carousel-wrapper">
        <h2 class="section-title">Selecciona un mes</h2>
        <div class="carousel-outer">
          <button class="btn-nav btn-prev" @click="prev">&#8249;</button>
          <div class="carousel-track" ref="trackRef">
            <div
              v-for="(month, i) in months"
              :key="i"
              class="month-card"
              :class="{ active: selected === i }"
              @click="selectMonth(i)"
            >
              <div class="month-card-title">{{ month }}</div>
              <div class="month-card-row">
                <span class="row-label">Ingreso:</span>
                <span class="row-value">$0,00</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Gastos necesarios pendientes:</span>
                <span class="row-value">$0,00</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Gastos necesarios pagados:</span>
                <span class="row-value">$0,00</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Gasto:</span>
                <span class="row-value">$0,00</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Ahorro:</span>
                <span class="row-value">$0,00</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Que debería tener:</span>
                <span class="row-value">$0,00</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Que puedo gastar?:</span>
                <span class="row-value">$0,00</span>
              </div>
            </div>
          </div>
          <button class="btn-nav btn-next" @click="next">&#8250;</button>
        </div>

        <!-- Dots -->
        <div class="dots">
          <span
            v-for="(_, i) in months"
            :key="i"
            class="dot"
            :class="{ active: selected === i }"
            @click="selectMonth(i)"
          />
        </div>
      </div>
    </div>

    <!-- Movimientos -->
    <div class="movimientos-wrapper">

      <div class="mov-header">
        <span class="mov-title">Movimientos de todos los meses</span>
        <button class="btn-agregar" @click="showModal = true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Agregar movimiento
        </button>
      </div>

      <!-- Summary bar -->
      <div class="summary-bar">
        <span>Ingresos: <b>$716.500,00</b></span>
        <span>Gastos: <b>$229.000,00</b></span>
        <span>Ahorros: <b>$50.000,00</b></span>
        <span>Gastos necesarios pendientes: <b>$4.000,00</b></span>
        <span>Gastos necesarios pagados: <b>$427.100,00</b></span>
        <span>Balance: <b>$10.400,00</b></span>
      </div>

      <!-- Ingresos -->
      <div class="section-block">
        <div class="section-heading">Ingresos</div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Monto</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/04/2026</td>
                <td>Salario</td>
                <td>Quincena 1 abril</td>
                <td class="monto-positivo">$358.250,00</td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>16/04/2026</td>
                <td>Salario</td>
                <td>Quincena 2 abril</td>
                <td class="monto-positivo">$358.250,00</td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Ahorros -->
      <div class="section-block">
        <div class="section-heading">Ahorros</div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Monto</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>05/04/2026</td>
                <td class="monto-ahorro">$30.000,00</td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>20/04/2026</td>
                <td class="monto-ahorro">$20.000,00</td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Gastos -->
      <div class="section-block">
        <div class="section-heading">Gastos</div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Monto</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>03/04/2026</td>
                <td>Alimentación</td>
                <td>Mercado semana 1</td>
                <td class="monto-negativo">$85.000,00</td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>10/04/2026</td>
                <td>Alimentación</td>
                <td>Mercado semana 2</td>
                <td class="monto-negativo">$72.000,00</td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>07/04/2026</td>
                <td>Transporte</td>
                <td>Recarga tarjeta</td>
                <td class="monto-negativo">$50.000,00</td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>14/04/2026</td>
                <td>Salud</td>
                <td>Medicamentos</td>
                <td class="monto-negativo">$22.000,00</td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Gastos necesarios -->
      <div class="section-block">
        <div class="section-heading">Gastos necesarios</div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Monto</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/04/2026</td>
                <td>Vivienda</td>
                <td>Arriendo abril</td>
                <td class="monto-info">$350.000,00</td>
                <td><span class="badge badge-pagado">Pagado</span></td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>05/04/2026</td>
                <td>Servicios</td>
                <td>Energía eléctrica</td>
                <td class="monto-info">$45.000,00</td>
                <td><span class="badge badge-pagado">Pagado</span></td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>05/04/2026</td>
                <td>Servicios</td>
                <td>Agua</td>
                <td class="monto-info">$18.000,00</td>
                <td><span class="badge badge-pagado">Pagado</span></td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>10/04/2026</td>
                <td>Servicios</td>
                <td>Gas natural</td>
                <td class="monto-info">$14.100,00</td>
                <td><span class="badge badge-pagado">Pagado</span></td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>25/04/2026</td>
                <td>Tecnología</td>
                <td>Internet hogar</td>
                <td class="monto-info">$4.000,00</td>
                <td><span class="badge badge-pendiente">Pendiente</span></td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <!-- Gestión de Deudas -->
    <div class="deudas-wrapper">

      <div class="deudas-header">
        <span class="mov-title">Gestión de Deudas</span>
        <div class="deudas-btns">
          <button class="btn-agregar btn-abonar" @click="showModalAbono = true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            Abonar a deuda
          </button>
          <button class="btn-agregar" @click="showModalDeuda = true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Agregar deuda
          </button>
        </div>
      </div>

      <!-- Tarjetas resumen -->
      <div class="deudas-summary-cards">
        <div class="deuda-card deuda-card--rojo">
          <div class="deuda-card-label-rojo">🔴 Deudas Pendientes (Yo debo)</div>
          <div class="deuda-card-value deuda-card-value--rojo">$7.435.000,00</div>
          <div class="deuda-card-sub">1 deuda(s) pendiente(s)</div>
        </div>
        <div class="deuda-card deuda-card--verde">
          <div class="deuda-card-label-verde">💛 Me Deben Pendientes</div>
          <div class="deuda-card-value deuda-card-value--verde">$60.000,00</div>
          <div class="deuda-card-sub">2 deuda(s) pendiente(s)</div>
        </div>
      </div>

      <!-- Deudas Pendientes (Yo debo) -->
      <div class="section-block">
        <div class="section-heading">■ Deudas Pendientes (Yo debo)</div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Fecha</th><th>Concepto</th><th>Descripción</th>
                <th>Monto</th><th>Estado</th><th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026-04-01</td>
                <td>Efectivo</td>
                <td>Le debo a Brayan la moto</td>
                <td class="monto-negativo">$7.435.000,00</td>
                <td><span class="badge badge-pendiente">Pendiente</span></td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Deudas Pagadas (Yo debo) -->
      <div class="section-block">
        <div class="section-heading">■ Deudas Pagadas (Yo debo)</div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Fecha</th><th>Concepto</th><th>Descripción</th>
                <th>Monto</th><th>Estado</th><th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026-04-15</td>
                <td>Efectivo</td>
                <td>Le debo a londoño por el lubricante de cadena.</td>
                <td class="monto-negativo">$10.000,00</td>
                <td><span class="badge badge-pagado">Pagada</span></td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Me Deben Pendientes -->
      <div class="section-block">
        <div class="section-heading">■ Me Deben Pendientes</div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Fecha</th><th>Concepto</th><th>Descripción</th>
                <th>Monto</th><th>Estado</th><th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026-04-18</td>
                <td>Tarjeta</td>
                <td>shein me debe plata.</td>
                <td class="monto-positivo">$10.000,00</td>
                <td><span class="badge badge-pendiente">Pendiente</span></td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>2026-04-01</td>
                <td>Efectivo</td>
                <td>Londoño me debe plata.</td>
                <td class="monto-positivo">$50.000,00</td>
                <td><span class="badge badge-pendiente">Pendiente</span></td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Me Deben Pagadas -->
      <div class="section-block">
        <div class="section-heading">■ Me Deben Pagadas</div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Fecha</th><th>Concepto</th><th>Descripción</th>
                <th>Monto</th><th>Estado</th><th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026-04-05</td>
                <td>Efectivo</td>
                <td>Simon me debe esa plata de la pizza.</td>
                <td class="monto-positivo">$14.000,00</td>
                <td><span class="badge badge-pagado">Pagada</span></td>
                <td class="acciones">
                  <button class="btn-add">Editar</button>
                  <button class="btn-del">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <!-- ===== MODAL AGREGAR MOVIMIENTO ===== -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showModal" class="modal-overlay" @click.self="cerrarModal">
          <div class="modal-box">

            <!-- Header -->
            <div class="modal-header">
              <div class="modal-title-row">
                <div class="modal-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
                <span class="modal-title">Agregar movimiento</span>
                <span v-if="tipoMovimiento" :class="['badge-tipo', `badge-tipo--${tipoMovimiento}`]">
                  {{ tipoLabels[tipoMovimiento] }}
                </span>
              </div>
              <button class="modal-close" @click="cerrarModal">✕</button>
            </div>

            <!-- Body -->
            <div class="modal-body">

              <!-- Tipo -->
              <div class="form-group">
                <label>Tipo de movimiento</label>
                <select v-model="tipoMovimiento">
                  <option value="">Selecciona un tipo...</option>
                  <option value="ingreso">Ingreso</option>
                  <option value="gasto">Gasto</option>
                  <option value="gasto_necesario">Gasto necesario</option>
                  <option value="ahorro">Ahorro</option>
                </select>
              </div>

              <!-- Campos para AHORRO -->
              <template v-if="tipoMovimiento === 'ahorro'">
                <div class="form-group">
                  <label>Monto</label>
                  <div class="input-prefix">
                    <span class="prefix-symbol">$</span>
                    <input
                      type="number"
                      v-model="formData.amount"
                      min="0"
                      step="0.01"
                      placeholder="0,00"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label>Fecha</label>
                  <input type="datetime-local" v-model="formData.created_at" />
                </div>
              </template>

              <!-- Campos para INGRESO / GASTO / GASTO NECESARIO -->
              <template v-else-if="tipoMovimiento">
                <div class="form-group">
                  <label>Categoría</label>
                  <select v-model="formData.category">
                    <option value="">Selecciona una categoría...</option>
                    <option
                      v-for="cat in categoriasPorTipo[tipoMovimiento]"
                      :key="cat"
                      :value="cat"
                    >{{ cat }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Descripción</label>
                  <textarea
                    v-model="formData.description"
                    placeholder="Descripción del movimiento..."
                    rows="3"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label>Monto</label>
                  <div class="input-prefix">
                    <span class="prefix-symbol">$</span>
                    <input
                      type="number"
                      v-model="formData.amount"
                      min="0"
                      step="0.01"
                      placeholder="0,00"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label>Fecha</label>
                  <input type="datetime-local" v-model="formData.created_at" />
                </div>
                <div v-if="tipoMovimiento === 'gasto_necesario'" class="form-group">
                  <label>Estado</label>
                  <select v-model="formData.estado">
                    <option value="pendiente">Pendiente</option>
                    <option value="pagado">Pagado</option>
                  </select>
                </div>
              </template>

              <!-- Botones -->
              <div v-if="tipoMovimiento" class="modal-actions">
                <button class="btn-cancelar" @click="cerrarModal">Cancelar</button>
                <button class="btn-guardar" @click="guardarMovimiento">Guardar movimiento</button>
              </div>

              <!-- Toast éxito -->
              <Transition name="toast-fade">
                <div v-if="toastVisible" class="toast-success">
                  ✓ Movimiento guardado correctamente.
                </div>
              </Transition>

            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
    <!-- ===== FIN MODAL MOVIMIENTO ===== -->

    <!-- ===== MODAL AGREGAR DEUDA ===== -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showModalDeuda" class="modal-overlay" @click.self="cerrarModalDeuda">
          <div class="modal-box">

            <div class="modal-header">
              <div class="modal-title-row">
                <div class="modal-icon modal-icon--rojo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <span class="modal-title">Agregar deuda</span>
              </div>
              <button class="modal-close" @click="cerrarModalDeuda">✕</button>
            </div>

            <div class="modal-body">

              <div class="form-group">
                <label>Concepto</label>
                <input type="text" v-model="deudaForm.concept" placeholder="Ej: Préstamo moto, Tarjeta crédito..." />
              </div>

              <div class="form-group">
                <label>Tipo de deuda</label>
                <select v-model="deudaForm.type_debt">
                  <option value="">Selecciona un tipo...</option>
                  <option value="yo_debo">Yo debo</option>
                  <option value="me_deben">Me deben</option>
                </select>
              </div>

              <div class="form-group">
                <label>Descripción</label>
                <textarea v-model="deudaForm.description" placeholder="Descripción de la deuda..." rows="3"></textarea>
              </div>

              <div class="form-group">
                <label>Monto</label>
                <div class="input-prefix">
                  <span class="prefix-symbol">$</span>
                  <input type="number" v-model="deudaForm.amount" min="0" step="0.01" placeholder="0,00" />
                </div>
              </div>

              <div class="form-group">
                <label>Fecha</label>
                <input type="datetime-local" v-model="deudaForm.created_at" />
              </div>

              <div class="form-group">
                <label>Estado</label>
                <select v-model="deudaForm.state">
                  <option value="pendiente">Pendiente</option>
                  <option value="pagada">Pagada</option>
                </select>
              </div>

              <div class="modal-actions">
                <button class="btn-cancelar" @click="cerrarModalDeuda">Cancelar</button>
                <button class="btn-guardar btn-guardar--rojo" @click="guardarDeuda">Guardar deuda</button>
              </div>

              <Transition name="toast-fade">
                <div v-if="toastDeuda" class="toast-success">
                  ✓ Deuda guardada correctamente.
                </div>
              </Transition>

            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
    <!-- ===== FIN MODAL DEUDA ===== -->

    <!-- ===== MODAL ABONAR A DEUDA ===== -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showModalAbono" class="modal-overlay" @click.self="cerrarModalAbono">
          <div class="modal-box">

            <div class="modal-header">
              <div class="modal-title-row">
                <div class="modal-icon modal-icon--verde">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <span class="modal-title">Abonar a deuda</span>
              </div>
              <button class="modal-close" @click="cerrarModalAbono">✕</button>
            </div>

            <div class="modal-body">

              <div class="form-group">
                <label>Deuda a abonar</label>
                <select v-model="abonoForm.id_debt">
                  <option value="">Selecciona una deuda...</option>
                  <option value="1">Le debo a Brayan la moto — $7.435.000,00</option>
                </select>
                <span class="form-hint">Solo se muestran deudas pendientes.</span>
              </div>

              <div class="form-group">
                <label>Monto del abono</label>
                <div class="input-prefix">
                  <span class="prefix-symbol">$</span>
                  <input type="number" v-model="abonoForm.amount" min="0" step="0.01" placeholder="0,00" />
                </div>
              </div>

              <div class="form-group">
                <label>Fecha del abono</label>
                <input type="datetime-local" v-model="abonoForm.created_at" />
              </div>

              <div class="form-group">
                <label>Método de pago</label>
                <select v-model="abonoForm.method">
                  <option value="">Selecciona un método...</option>
                  <option value="efectivo">Efectivo</option>
                  <option value="transferencia">Transferencia</option>
                  <option value="tarjeta">Tarjeta</option>
                  <option value="nequi">Nequi</option>
                  <option value="daviplata">Daviplata</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div class="form-group">
                <label>Descripción <span class="form-optional">(opcional)</span></label>
                <textarea v-model="abonoForm.description" placeholder="Notas del abono..." rows="3"></textarea>
              </div>

              <div class="modal-actions">
                <button class="btn-cancelar" @click="cerrarModalAbono">Cancelar</button>
                <button class="btn-guardar btn-guardar--verde" @click="guardarAbono">Registrar abono</button>
              </div>

              <Transition name="toast-fade">
                <div v-if="toastAbono" class="toast-success">
                  ✓ Abono registrado correctamente.
                </div>
              </Transition>

            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
    <!-- ===== FIN MODAL ABONO ===== -->

  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

// ── Carrusel ──────────────────────────────────────────────
const selected = ref(new Date().getMonth())
const trackRef = ref(null)

const months = [
  'Enero 2026', 'Febrero 2026', 'Marzo 2026', 'Abril 2026',
  'Mayo 2026', 'Junio 2026', 'Julio 2026', 'Agosto 2026',
  'Septiembre 2026', 'Octubre 2026', 'Noviembre 2026', 'Diciembre 2026',
]

const scrollToCard = async (i) => {
  await nextTick()
  const cards = trackRef.value?.querySelectorAll('.month-card')
  if (cards?.[i]) {
    cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }
}

const selectMonth = (i) => {
  selected.value = i
  scrollToCard(i)
}

const prev = () => { if (selected.value > 0) selectMonth(selected.value - 1) }
const next = () => { if (selected.value < months.length - 1) selectMonth(selected.value + 1) }

onMounted(async () => {
  await nextTick()
  setTimeout(() => scrollToCard(selected.value), 100)
})

// ── Modal ─────────────────────────────────────────────────
const showModal = ref(false)
const tipoMovimiento = ref('')
const toastVisible = ref(false)

const formData = ref({
  category: '',
  description: '',
  amount: null,
  created_at: '',
  estado: 'pendiente',
})

const tipoLabels = {
  ingreso: 'Ingreso',
  gasto: 'Gasto',
  gasto_necesario: 'Gasto necesario',
  ahorro: 'Ahorro',
}

const categoriasPorTipo = {
  ingreso: ['Salario', 'Freelance', 'Negocio', 'Inversión', 'Regalo', 'Otro'],
  gasto: ['Alimentación', 'Transporte', 'Salud', 'Entretenimiento', 'Ropa', 'Educación', 'Tecnología', 'Otro'],
  gasto_necesario: ['Vivienda', 'Servicios', 'Tecnología', 'Salud', 'Educación', 'Otro'],
}

const cerrarModal = () => {
  showModal.value = false
  tipoMovimiento.value = ''
  toastVisible.value = false
  formData.value = {
    category: '',
    description: '',
    amount: null,
    created_at: '',
    estado: 'pendiente',
  }
}

const guardarMovimiento = () => {
  // Aquí conectas con tu API / backend
  console.log('Guardando movimiento:', {
    type: tipoMovimiento.value,
    ...formData.value,
  })
  toastVisible.value = true
  setTimeout(() => cerrarModal(), 2000)
}

// ── Modal Agregar Deuda ───────────────────────────────────
const showModalDeuda = ref(false)
const toastDeuda = ref(false)

const deudaForm = ref({
  concept: '',
  type_debt: '',
  description: '',
  amount: null,
  created_at: '',
  state: 'pendiente',
})

const cerrarModalDeuda = () => {
  showModalDeuda.value = false
  toastDeuda.value = false
  deudaForm.value = {
    concept: '',
    type_debt: '',
    description: '',
    amount: null,
    created_at: '',
    state: 'pendiente',
  }
}

const guardarDeuda = () => {
  // Aquí conectas con tu API / backend
  console.log('Guardando deuda:', { ...deudaForm.value })
  toastDeuda.value = true
  setTimeout(() => cerrarModalDeuda(), 2000)
}

// ── Modal Abonar a Deuda ──────────────────────────────────
const showModalAbono = ref(false)
const toastAbono = ref(false)

const abonoForm = ref({
  id_debt: '',
  amount: null,
  created_at: '',
  method: '',
  description: '',
})

const cerrarModalAbono = () => {
  showModalAbono.value = false
  toastAbono.value = false
  abonoForm.value = {
    id_debt: '',
    amount: null,
    created_at: '',
    method: '',
    description: '',
  }
}

const guardarAbono = () => {
  // Aquí conectas con tu API / backend
  console.log('Guardando abono:', { ...abonoForm.value })
  toastAbono.value = true
  setTimeout(() => cerrarModalAbono(), 2000)
}
</script>

<style scoped>

</style>