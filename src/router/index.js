import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/GraficosResumen', name: 'GraficosResumen', component: () => import('../views/GraficosResumen.vue') },
  { path: '/perfil', name: 'Perfil', component: () => import('../views/perfil.vue') },
  { path: '/HistorialAcciones', name: 'HistorialAcciones', component: () => import('../views/HistorialAcciones.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
