<template>
    <div>
        <h1>Habitaciones</h1>
        <div style="display: flex; flex-wrap: wrap;">
            <CardInfo v-for="p in products" :key="p.id" :imageUrl="p.image" :overline="p.overline" :tile="p.name"
                :precio="p.price" :descripcion="p.description" :descripcionComplete="p.descripcionComplete">

            </CardInfo>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";
import CardInfo from '../components/CardInfo.vue';

const products = [
    {
        id: 1,
        name: "Suite Familiar con Terraza",
        overline: "⭐5 ESTRELLAS",
        image: "Hotel-Alex/src/assets/img/habitaciones/hab1.jpeg",
        price: "$420.000 COP",
        description: "Espacio, comodidad y vistas para compartir en familia.",
        descripcionComplete: `Perfecta para familias o grupos, esta amplia suite cuenta con dos camas dobles, una sala de estar y una terraza privada con vista a las montañas. Diseñada para el descanso y la convivencia en un ambiente acogedor y natural.<br><br><strong>Incluye:</strong><br>- 2 camas dobles<br>- Terraza privada<br>- Sala de estar<br>- Baño privado con agua caliente<br>- Wifi y ventilador<br>- Desayuno típico incluido`
    },
    {
        id: 2,
        name: "Business Twin con Balcón",
        overline: "⭐4 ESTRELLAS",
        image: "./Hotel-Alex/src/assets/img/habitaciones/hab2.jpeg",
        price: "$280.000 COP",
        description: "Funcionalidad y tranquilidad para tus viajes de trabajo.",
        descripcionComplete: `Ideal para viajes de negocios o amigos que comparten habitación. Ofrece dos camas individuales, escritorio de trabajo y un balcón con vista al jardín. Un espacio práctico con el encanto de lo tradicional.<br><br><strong>Incluye:</strong><br>- 2 camas sencillas<br>- Balcón privado<br>- Escritorio de trabajo<br>- Wifi de alta velocidad<br>- Baño privado<br>- Desayuno típico incluido`
    },
    {
        id: 3,
        name: "Suite Familiar con Terraza",
        overline: "⭐5 ESTRELLAS",
        image: "/src/assets/img/habitaciones/hab3.jpeg",
        price: "$420.000 COP",
        description: "Espacio, comodidad y vistas para compartir en familia.",
        descripcionComplete: `Perfecta para familias o grupos, esta amplia suite cuenta con dos camas dobles, una sala de estar y una terraza privada con vista a las montañas. Diseñada para el descanso y la convivencia en un ambiente acogedor y natural.<br><br><strong>Incluye:</strong><br>- 2 camas dobles<br>- Terraza privada<br>- Sala de estar<br>- Baño privado con agua caliente<br>- Wifi y ventilador<br>- Desayuno típico incluido`
    },
    {
        id: 4,
        name: "Suite Familiar con Terraza",
        overline: "⭐5 ESTRELLAS",
        image: "img/habitaciones/hab4.jpg",
        price: "$420.000 COP",
        description: "Espacio, comodidad y vistas para compartir en familia.",
        descripcionComplete: `Perfecta para familias o grupos, esta amplia suite cuenta con dos camas dobles, una sala de estar y una terraza privada con vista a las montañas. Diseñada para el descanso y la convivencia en un ambiente acogedor y natural.<br><br><strong>Incluye:</strong><br>- 2 camas dobles<br>- Terraza privada<br>- Sala de estar<br>- Baño privado con agua caliente<br>- Wifi y ventilador<br>- Desayuno típico incluido`
    },
];

</script>
