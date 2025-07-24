import Compras from "../components/Compras.vue"
import Ventas from "../components/Ventas.vue"
import Productos from "../components/Productos.vue"

import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    
    { path:"/compras" ,component: Compras },
    { path:"/ventas" ,component: Ventas },
    { path:"/productos" ,component: Productos },
]

export const router =createRouter({
    history:createWebHashHistory(),
    routes
})
