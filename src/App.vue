<template>
  <div>
    <q-layout view="hHh lpR fff">
      <q-header
        elevated
        class="bg-primary text-white"
        height-hint="98"
        :style="{ color: 'black' }"
      >
        <q-toolbar>
          <q-toolbar-title class="text-dark">
            <q-avatar>
              <img src="./assets/img/logo.jpeg" />
            </q-avatar>
            Hotel Portal Guane
          </q-toolbar-title>
        </q-toolbar>

        <q-tabs align="left" class="text-dark">
          <q-route-tab to="/inicio" label="Inicio" />
          <q-route-tab to="/habitaciones" label="Habitaciones" />
          <q-route-tab to="/deportes" label="Deportes extremos" />
          <q-route-tab to="/gastronomia" label="Nuestra gastronomía" />
          <q-route-tab to="/servicios-extras" label="Servicios extra" />
        </q-tabs>
      </q-header>

      <q-drawer
        style="display: flex; flex-direction: column; gap: 5px"
        v-model="rightDrawerOpen"
        side="right"
        overlay
        behavior="mobile"
      >
        <!-- drawer content -->
        <q-btn label="Ventas" glossy color="purple" to="/ventas" />
        <q-btn label="Compras" glossy color="purple" to="/compras" />
        <q-btn label="Productos" glossy color="purple" to="/productos" />
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer elevated class="bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="./assets/img/logo.jpeg" />
            </q-avatar>
            <div>
              <h4>Contáctanos</h4>
              <div class="icons">
                <i class="fa-brands fa-facebook"></i>
                <span>Hotel Portal Guane</span>
                <i class="fa-brands fa-youtube"></i>
                <span>Hotel Portal Guane</span>
                <i class="fa-solid fa-envelope"></i>
                <span>hotelportalguane@gmail.com</span>
                <i class="fa-solid fa-phone"></i> <span>+57 312 234 2345</span>
              </div>
            </div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";
const rightDrawerOpen = ref(false);
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>