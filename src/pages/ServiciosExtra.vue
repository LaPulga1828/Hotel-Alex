<template>
    <div>
        <h1>servicios extra</h1>
        <div style="display: flex; flex-wrap: wrap;">
            <CardInfo  v-for="p in extraServices" :key="p.id" :imageUrl="p.image" :overline="p.overline" :tile="p.name"
                :precio="p.price" :descripcion="p.description" :descripcionComplete="p.descripcionComplete">

            </CardInfo>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import CardInfo from '../components/CardInfo.vue';

const extraServices = [
  {
    id: 1,
    name: "Piscina Panorámica",
    overline: "🏖️ RELAX Y VISTA",
    image: "/Hotel-Alex/src/assets/img/servicios/piscina.jpg",
    price: "Acceso libre / $25.000 COP externo",
    description: "Sumérgete en la calma con vista a las montañas.",
    descripcionComplete: `Nuestra piscina al aire libre es el lugar perfecto para refrescarse, relajarse y disfrutar de los atardeceres de Santander. Rodeada de jardines y con zona de descanso.<br><br><strong>Incluye:</strong><br>- Acceso a piscina adultos y niños<br>- Camas tipo lounge y sombrillas<br>- Ducha y vestidores<br>- Servicio de bebidas (con costo adicional)<br><br><strong>Acceso:</strong> Libre para huéspedes<br><strong>Pase diario externo:</strong> $25.000 COP por persona`
  },
  {
    id: 2,
    name: "Sala de Reuniones",
    overline: "🧑‍💼 NEGOCIOS EN LA MONTAÑA",
    image: "/Hotel-Alex/src/assets/img/servicios/sala-reuniones.jpg",
    price: "$80.000 COP / hora - $300.000 COP jornada",
    description: "Reúnete en un espacio cómodo y natural.",
    descripcionComplete: `Un salón privado equipado para reuniones de trabajo, presentaciones o eventos pequeños, con vista a jardines y café disponible.<br><br><strong>Incluye:</strong><br>- Pantalla, proyector y pizarra<br>- Wifi de alta velocidad<br>- Estación de café y agua<br>- Capacidad hasta 20 personas<br><br><strong>Acceso:</strong> Bajo reserva`
  },
  {
    id: 3,
    name: "Spa Rural Portal Guane",
    overline: "💆 BIENESTAR NATURAL",
    image: "/Hotel-Alex/src/assets/img/servicios/spa.jpg",
    price: "Desde $70.000 COP / sesión",
    description: "Relájate con los aromas y sonidos de la naturaleza.",
    descripcionComplete: `Espacio de relajación con terapias ancestrales y productos naturales de la región. Ideal para renovar cuerpo y mente.<br><br><strong>Incluye (según sesión):</strong><br>- Masaje con piedras calientes<br>- Aromaterapia con hierbas locales<br>- Baños de esencias<br>- Masajes relajantes o descontracturantes<br><br><strong>Acceso:</strong> Bajo cita previa`
  },
  {
    id: 4,
    name: "Canchas Recreativas",
    overline: "⚽ DIVERSIÓN AL AIRE LIBRE",
    image: "/Hotel-Alex/src/assets/img/servicios/canchas.jpg",
    price: "Libre / $40.000 COP externo",
    description: "Diversión al aire libre para todas las edades.",
    descripcionComplete: `Áreas deportivas para disfrutar en grupo o en familia, rodeadas de naturaleza y con iluminación nocturna.<br><br><strong>Incluye:</strong><br>- Cancha de microfútbol en césped<br>- Cancha de vóley-playa<br>- Balones disponibles en recepción<br><br><strong>Acceso:</strong> Libre para huéspedes<br><strong>Renta para externos:</strong> $40.000 COP por hora`
  },
  {
    id: 5,
    name: "Gimnasio Natural",
    overline: "🏋️ ENERGÍA ENTRE VERDE",
    image: "/Hotel-Alex/src/assets/img/servicios/gimnasio.jpg",
    price: "Incluido",
    description: "Activa tu cuerpo en un entorno saludable.",
    descripcionComplete: `Espacio de entrenamiento con máquinas básicas y vistas verdes para que mantengas tu rutina incluso en vacaciones.<br><br><strong>Incluye:</strong><br>- Pesas, caminadora, bicicleta estática<br>- Esterillas de yoga y cuerdas<br>- Zona techada y ventilada<br><br><strong>Acceso:</strong> Libre para huéspedes<br><strong>Horario:</strong> 6:00 a.m. – 9:00 p.m.`
  },
  {
    id: 6,
    name: "Salas de Juegos y Entretenimiento",
    overline: "🎲 TIEMPO EN FAMILIA",
    image: "/Hotel-Alex/src/assets/img/servicios/juegos.jpg",
    price: "Incluido / $50.000 COP renta privada",
    description: "Diversión asegurada para grandes y chicos.",
    descripcionComplete: `Un espacio acogedor para compartir momentos de ocio en pareja, familia o con nuevos amigos.<br><br><strong>Incluye:</strong><br>- Mesa de billar<br>- Juegos de mesa (ajedrez, dominó, cartas)<br>- Televisor con consola de videojuegos<br>- Área de lectura y mini biblioteca<br><br><strong>Acceso:</strong> Libre para huéspedes<br><strong>Renta privada (opcional):</strong> $50.000 COP por 2 horas`
  }
];


</script>