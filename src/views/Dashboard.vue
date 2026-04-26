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

    <!-- Movimientos -->
    <div class="movimientos-wrapper">

      <div class="mov-header">
        <span class="mov-title">Movimientos de todos los meses</span>
        <button class="btn-agregar" @click="abrirModal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Agregar movimiento
        </button>
      </div>

      <div class="summary-bar">
        <span>Ingresos: <b>{{ fmt(totalIngresos) }}</b></span>
        <span>Gastos: <b>{{ fmt(totalGastos) }}</b></span>
        <span>Ahorros: <b>{{ fmt(totalAhorros) }}</b></span>
        <span>Gastos necesarios pendientes: <b>{{ fmt(totalGnPendientes) }}</b></span>
        <span>Gastos necesarios pagados: <b>{{ fmt(totalGnPagados) }}</b></span>
        <span>Balance: <b>{{ fmt(balance) }}</b></span>
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
              <tr v-if="!ingresos.length" class="empty-row">
                <td colspan="5">No hay ingresos para este mes.</td>
              </tr>
              <tr v-for="(item, i) in ingresos" :key="i">
                <td>{{ item.fecha }}</td>
                <td>{{ item.categoria }}</td>
                <td>{{ item.descripcion }}</td>
                <td class="monto-positivo">{{ fmt(item.monto) }}</td>
                <td style="display: flex; gap: 6px;">
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
              <tr v-if="!ahorros.length" class="empty-row">
                <td colspan="3">No hay ahorros para este mes.</td>
              </tr>
              <tr v-for="(item, i) in ahorros" :key="i">
                <td>{{ item.fecha }}</td>
                <td class="monto-ahorro">{{ fmt(item.monto) }}</td>
                <td style="display: flex; gap: 6px;">
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
              <tr v-if="!gastos.length" class="empty-row">
                <td colspan="5">No hay gastos normales para este mes.</td>
              </tr>
              <tr v-for="(item, i) in gastos" :key="i">
                <td>{{ item.fecha }}</td>
                <td>{{ item.categoria }}</td>
                <td>{{ item.descripcion }}</td>
                <td class="monto-negativo">{{ fmt(item.monto) }}</td>
                <td style="display: flex; gap: 6px;">
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
              <tr v-if="!gastosNecesarios.length" class="empty-row">
                <td colspan="6">No hay gastos necesarios para este mes.</td>
              </tr>
              <tr v-for="(item, i) in gastosNecesarios" :key="i">
                <td>{{ item.fecha }}</td>
                <td>{{ item.categoria }}</td>
                <td>{{ item.descripcion }}</td>
                <td class="monto-info">{{ fmt(item.monto) }}</td>
                <td>
                  <span class="badge" :class="item.pagado ? 'badge-pagado' : 'badge-pendiente'">
                    {{ item.pagado ? 'Pagado' : 'Pendiente' }}
                  </span>
                </td>
                <td style="display: flex; gap: 6px;">
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
import { ref, nextTick, onMounted, computed } from 'vue'

const selected = ref(new Date().getMonth())
const trackRef = ref(null)

// ── Datos por mes (carrusel) ──
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

// ── Formato de moneda ──
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

const prev = () => {
  if (selected.value > 0) selectMonth(selected.value - 1)
}

const next = () => {
  if (selected.value < months.length - 1) selectMonth(selected.value + 1)
}

onMounted(async () => {
  await nextTick()
  setTimeout(() => scrollToCard(selected.value), 100)
})

// ── Movimientos ──
// ── Movimientos ──
const ingresos = ref([
  { fecha: '01/04/2026', categoria: 'Salario',    descripcion: 'Quincena 1 abril',     monto: 358250 },
  { fecha: '16/04/2026', categoria: 'Salario',    descripcion: 'Quincena 2 abril',     monto: 358250 },
])

const ahorros = ref([
  { fecha: '05/04/2026', monto: 30000 },
  { fecha: '20/04/2026', monto: 20000 },
])

const gastos = ref([
  { fecha: '03/04/2026', categoria: 'Alimentación', descripcion: 'Mercado semana 1',   monto: 85000  },
  { fecha: '10/04/2026', categoria: 'Alimentación', descripcion: 'Mercado semana 2',   monto: 72000  },
  { fecha: '07/04/2026', categoria: 'Transporte',   descripcion: 'Recarga tarjeta',    monto: 50000  },
  { fecha: '14/04/2026', categoria: 'Salud',        descripcion: 'Medicamentos',       monto: 22000  },
])

const gastosNecesarios = ref([
  { fecha: '01/04/2026', categoria: 'Vivienda',   descripcion: 'Arriendo abril',       monto: 350000, pagado: true  },
  { fecha: '05/04/2026', categoria: 'Servicios',  descripcion: 'Energía eléctrica',    monto: 45000,  pagado: true  },
  { fecha: '05/04/2026', categoria: 'Servicios',  descripcion: 'Agua',                 monto: 18000,  pagado: true  },
  { fecha: '10/04/2026', categoria: 'Servicios',  descripcion: 'Gas natural',          monto: 14100,  pagado: true  },
  { fecha: '25/04/2026', categoria: 'Tecnología', descripcion: 'Internet hogar',       monto: 4000,   pagado: false },
])

// ── Totales calculados ──
const totalIngresos     = computed(() => ingresos.value.reduce((s, i) => s + i.monto, 0))
const totalGastos       = computed(() => gastos.value.reduce((s, i) => s + i.monto, 0))
const totalAhorros      = computed(() => ahorros.value.reduce((s, i) => s + i.monto, 0))
const totalGnPendientes = computed(() => gastosNecesarios.value.filter(i => !i.pagado).reduce((s, i) => s + i.monto, 0))
const totalGnPagados    = computed(() => gastosNecesarios.value.filter(i =>  i.pagado).reduce((s, i) => s + i.monto, 0))
const balance           = computed(() =>
  totalIngresos.value - totalGastos.value - totalAhorros.value - totalGnPagados.value - totalGnPendientes.value
)

// ── Acciones de tabla ──
const eliminar = (lista, i) => {
  const map = { ingresos, ahorros, gastos, gastosNecesarios }
  map[lista].value.splice(i, 1)
}

const togglePago = (i) => {
  gastosNecesarios.value[i].pagado = !gastosNecesarios.value[i].pagado
}

const abrirModal = () => {
  // aquí conectas tu modal de formulario
  console.log('abrir modal')
}

</script>

<style scoped>

</style>