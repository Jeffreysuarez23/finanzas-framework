<template>
  <div class="dashboard-wrapper">

    <!-- Hero Banner -->
    <div class="dashboard-banner">
      <h1 class="banner-title">Graficos y Resumen</h1>
      <p class="banner-subtitle">Controla tus ingresos y gastos en un solo lugar.</p>
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
              <div class="month-card-title">{{ month.name }}</div>
              <div class="month-card-row">
                <span class="row-label">Ingreso:</span>
                <span class="row-value">{{ fmt(month.ingreso) }}</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Gastos necesarios pendientes:</span>
                <span class="row-value">{{ fmt(month.gnp) }}</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Gastos necesarios pagados:</span>
                <span class="row-value">{{ fmt(month.gp) }}</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Gasto:</span>
                <span class="row-value">{{ fmt(month.gasto) }}</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Ahorro:</span>
                <span class="row-value">{{ fmt(month.ahorro) }}</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Que debería tener (sin gastos pendientes):</span>
                <span class="row-value">{{ fmt(month.deberiaT) }}</span>
              </div>
              <div class="month-card-row">
                <span class="row-label">Que puedo gastar?:</span>
                <span class="row-value">{{ fmt(month.puedoG) }}</span>
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

    <!-- Gráficos -->
<div class="charts-section">

  <!-- Balance Mensual -->
  <div class="chart-card">
    <h3 class="chart-title">Balance Mensual</h3>
    <div class="chart-canvas-wrapper">
      <canvas ref="chartBalance"></canvas>
    </div>
  </div>

  <!-- Ingresos vs Gastos -->
  <div class="chart-card">
    <h3 class="chart-title">Ingresos vs Gastos por Mes</h3>
    <div class="chart-canvas-wrapper">
      <canvas ref="chartBarras"></canvas>
    </div>
    <div class="chart-legend">
      <span class="legend-item"><span class="legend-dot" style="background:#4ade80"></span>Ingresos</span>
      <span class="legend-item"><span class="legend-dot" style="background:#a78bfa"></span>Ahorros</span>
      <span class="legend-item"><span class="legend-dot" style="background:#f87171"></span>Gastos Ordinarios</span>
      <span class="legend-item"><span class="legend-dot" style="background:#60a5fa"></span>Necesarios Pagados</span>
      <span class="legend-item"><span class="legend-dot" style="background:#facc15"></span>Necesarios Pendientes</span>
    </div>
  </div>

  <!-- Distribución -->
  <div class="chart-card">
    <h3 class="chart-title">Distribución de Montos Totales</h3>
    <div class="chart-canvas-wrapper">
      <canvas ref="chartDonut1"></canvas>
    </div>
    <div class="chart-legend">
      <span class="legend-item"><span class="legend-dot" style="background:#4ade80"></span>Ingresos</span>
      <span class="legend-item"><span class="legend-dot" style="background:#f87171"></span>Gastos Totales</span>
      <span class="legend-item"><span class="legend-dot" style="background:#60a5fa"></span>Ahorros</span>
    </div>
  </div>

  <!-- Estado de Deudas -->
  <div class="chart-card">
    <h3 class="chart-title">Estado de Deudas</h3>
    <div class="chart-canvas-wrapper">
      <canvas ref="chartDonut2"></canvas>
    </div>
    <div class="chart-legend">
      <span class="legend-item"><span class="legend-dot" style="background:#f87171"></span>Deudas Pendientes</span>
      <span class="legend-item"><span class="legend-dot" style="background:#4ade80"></span>Deudas Pagadas</span>
      <span class="legend-item"><span class="legend-dot" style="background:#facc15"></span>Me Deben Pendiente</span>
      <span class="legend-item"><span class="legend-dot" style="background:#60a5fa"></span>Me Deben Pagado</span>
    </div>
  </div>

</div>

  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue' // ✅ quitado "computed", agregado "watch"
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const selected = ref(new Date().getMonth())
const trackRef = ref(null)

const months = [
  { name: 'Enero 2026',      ingreso: 0,      gnp: 0, gp: 0,      gasto: 0,      ahorro: 0,     deberiaT: 0,     puedoG: 0 },
  { name: 'Febrero 2026',    ingreso: 0,      gnp: 0, gp: 0,      gasto: 0,      ahorro: 0,     deberiaT: 0,     puedoG: 0 },
  { name: 'Marzo 2026',      ingreso: 0,      gnp: 0, gp: 0,      gasto: 0,      ahorro: 0,     deberiaT: 0,     puedoG: 0 },
  { name: 'Abril 2026',      ingreso: 716500, gnp: 0, gp: 427100, gasto: 229000, ahorro: 50000, deberiaT: 10400, puedoG: 10400 },
  { name: 'Mayo 2026',       ingreso: 0,      gnp: 0, gp: 0,      gasto: 0,      ahorro: 0,     deberiaT: 0,     puedoG: 0 },
  { name: 'Junio 2026',      ingreso: 0,      gnp: 0, gp: 0,      gasto: 0,      ahorro: 0,     deberiaT: 0,     puedoG: 0 },
  { name: 'Julio 2026',      ingreso: 0,      gnp: 0, gp: 0,      gasto: 0,      ahorro: 0,     deberiaT: 0,     puedoG: 0 },
  { name: 'Agosto 2026',     ingreso: 0,      gnp: 0, gp: 0,      gasto: 0,      ahorro: 0,     deberiaT: 0,     puedoG: 0 },
  { name: 'Septiembre 2026', ingreso: 0,      gnp: 0, gp: 0,      gasto: 0,      ahorro: 0,     deberiaT: 0,     puedoG: 0 },
  { name: 'Octubre 2026',    ingreso: 0,      gnp: 0, gp: 0,      gasto: 0,      ahorro: 0,     deberiaT: 0,     puedoG: 0 },
  { name: 'Noviembre 2026',  ingreso: 0,      gnp: 0, gp: 0,      gasto: 0,      ahorro: 0,     deberiaT: 0,     puedoG: 0 },
  { name: 'Diciembre 2026',  ingreso: 0,      gnp: 0, gp: 0,      gasto: 0,      ahorro: 0,     deberiaT: 0,     puedoG: 0 },
]

const fmt = (n) => '$' + n.toLocaleString('es-CO', { minimumFractionDigits: 2 })

// ── Carrusel ──
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

// ── Charts ──
const chartBalance = ref(null)
const chartBarras  = ref(null)
const chartDonut1  = ref(null)
const chartDonut2  = ref(null)

let instanceBalance = null // ✅ inicializados en null, no undefined
let instanceBarras  = null
let instanceDonut1  = null
let instanceDonut2  = null

const BORDER = '#131e2e'
const GRID   = 'rgba(59,130,246,0.1)'
const TICK   = '#64748b'
const TIP_BG = '#1e293b'

const buildCharts = (m) => {
  // ✅ Verificación antes de destruir, por si el canvas aún no existe
  instanceBalance?.destroy()
  instanceBarras?.destroy()
  instanceDonut1?.destroy()
  instanceDonut2?.destroy()

  if (!chartBalance.value || !chartBarras.value || !chartDonut1.value || !chartDonut2.value) return // ✅ guard: espera a que el DOM esté listo

  const balances = months.map((_, i) => (i === selected.value ? months[i].deberiaT : 0)) // ✅ corregido: usaba "mo" innecesario
  const labels12 = months.map(mo => mo.name.slice(0, 3))

  instanceBalance = new Chart(chartBalance.value, {
    type: 'line',
    data: {
      labels: labels12,
      datasets: [{ label: 'Balance', data: balances, borderColor: '#60a5fa',
        backgroundColor: 'rgba(96,165,250,0.15)', fill: true, tension: 0.4,
        pointBackgroundColor: '#60a5fa', pointRadius: 4 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false },
        tooltip: { backgroundColor: TIP_BG, titleColor: '#94a3b8', bodyColor: '#e2e8f0',
          callbacks: { label: ctx => '$' + ctx.raw.toLocaleString('es-CO') } } },
      scales: {
        x: { ticks: { color: TICK, font: { size: 10 } }, grid: { color: GRID } },
        y: { ticks: { color: TICK, font: { size: 10 }, callback: v => '$' + (v / 1000).toFixed(0) + 'k' }, grid: { color: GRID } }
      }
    }
  })

  instanceBarras = new Chart(chartBarras.value, {
    type: 'bar',
    data: {
      labels: [m.name],
      datasets: [
        { label: 'Ingresos',              data: [m.ingreso], backgroundColor: '#4ade80' },
        { label: 'Ahorros',               data: [m.ahorro],  backgroundColor: '#a78bfa' },
        { label: 'Gastos Ordinarios',     data: [m.gasto],   backgroundColor: '#f87171' },
        { label: 'Necesarios Pagados',    data: [m.gp],      backgroundColor: '#60a5fa' },
        { label: 'Necesarios Pendientes', data: [m.gnp],     backgroundColor: '#facc15' },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false },
        tooltip: { backgroundColor: TIP_BG, titleColor: '#94a3b8', bodyColor: '#e2e8f0',
          callbacks: { label: ctx => ctx.dataset.label + ': $' + ctx.raw.toLocaleString('es-CO') } } },
      scales: {
        x: { ticks: { color: TICK, font: { size: 10 } }, grid: { color: GRID } },
        y: { ticks: { color: TICK, font: { size: 10 }, callback: v => '$' + (v / 1000000).toFixed(1) + 'M' }, grid: { color: GRID } }
      }
    }
  })

  const gastoTotal = m.gasto + m.gp + m.gnp

  instanceDonut1 = new Chart(chartDonut1.value, {
    type: 'doughnut',
    data: {
      labels: ['Ingresos', 'Gastos Totales', 'Ahorros'],
      datasets: [{ data: [m.ingreso, gastoTotal, m.ahorro],
        backgroundColor: ['#4ade80', '#f87171', '#60a5fa'],
        borderColor: BORDER, borderWidth: 3 }]
    },
    options: { responsive: true, maintainAspectRatio: false, cutout: '65%',
      plugins: { legend: { display: false },
        tooltip: { backgroundColor: TIP_BG, titleColor: '#94a3b8', bodyColor: '#e2e8f0',
          callbacks: { label: ctx => ctx.label + ': $' + ctx.raw.toLocaleString('es-CO') } } } }
  })

  instanceDonut2 = new Chart(chartDonut2.value, {
    type: 'doughnut',
    data: {
      labels: ['Deudas Pendientes', 'Deudas Pagadas', 'Me Deben Pendiente', 'Me Deben Pagado'],
      datasets: [{ data: [m.gnp, m.gp, 0, 0],
        backgroundColor: ['#f87171', '#4ade80', '#facc15', '#60a5fa'],
        borderColor: BORDER, borderWidth: 3 }]
    },
    options: { responsive: true, maintainAspectRatio: false, cutout: '65%',
      plugins: { legend: { display: false },
        tooltip: { backgroundColor: TIP_BG, titleColor: '#94a3b8', bodyColor: '#e2e8f0',
          callbacks: { label: ctx => ctx.label + ': $' + ctx.raw.toLocaleString('es-CO') } } } }
  })
}

// ✅ Un solo onMounted que maneja carrusel + charts
onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    scrollToCard(selected.value)
    buildCharts(months[selected.value])
  }, 100)
})

watch(selected, (i) => buildCharts(months[i]))
</script>

<style scoped>

</style>