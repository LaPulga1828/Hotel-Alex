<template>
    <div>
        <h1>Habitaciones</h1>
        <div style="display: flex; flex-wrap: wrap;"><CardInfo v-for="p in products" :key="p.id"
        :imageUrl="p.image"
        :overline="p.overline"
        :tile="p.name"
        :precio="p.price"
        :descripcion="p.description"
        :descripcionComplete="p.description"
        >

        </CardInfo></div>
        
    </div>
</template>

<script setup>
import { ref } from "vue";
import CardInfo from '../components/CardInfo.vue';

const products = [
    {
        id: 1,
        name: "Teclado Mecánico RGB",
        overline:"⭐5 ESTRELLAS",
        image: "/src/assets/img/habitaciones/hab1.jpeg",
        price: 89.99,
        description:
            "Teclado gaming con switches mecánicos y retroiluminación RGB personalizable.",
    },
    {
        id: 2,
        name: "Ratón Inalámbrico Ergonómico",
        image: "",
        price: 35.5,
        description:
            "Ratón con diseño ergonómico y conectividad inalámbrica de baja latencia.",
    },
    {
        id: 3,
        name: 'Monitor Ultra-Wide 34"',
        image: "https://www.lg.com/content/dam/channel/wcms/co/images/monitores/24mp400-b_awp_escb_co_c/gallery/DZ-2.jpg",
        price: 499.0,
        description:
            "Monitor curvo de 34 pulgadas con resolución QHD y alta tasa de refresco.",
    },
    {
        id: 4,
        name: "Webcam HD 1080p",
        image: "https://m.media-amazon.com/images/I/61-K2lXmHQL.jpg",
        price: 25.0,
        // Este no tendrá una descripción específica para ver el default
    },
];

</script>