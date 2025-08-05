import Inicio from "../pages/Inicio.vue"
import Habitaciones from "../pages/Habitaciones.vue"
import Gastronomia from "../pages/Gastronomia.vue"
import Deportes from "../pages/Deportes.vue"
import ServiciosExtra from "../pages/ServiciosExtra.vue"

import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    
    {path: '/',redirect: '/inicio'},
    { path:"/inicio" ,component: Inicio },
    { path:"/habitaciones" ,component: Habitaciones },
    { path:"/gastronomia" ,component: Gastronomia },
    { path:"/deportes" ,component: Deportes },
    { path:"/servicios-extras" ,component: ServiciosExtra },
]

export const router =createRouter({
    history:createWebHashHistory(),
    routes
})
