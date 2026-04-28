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
        <button class="btn-agregar">
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
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

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
</script>

<style scoped>
</style>