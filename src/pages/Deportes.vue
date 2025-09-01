<template>
    <div>
        <h1>deportes</h1>
        <div style="display: flex; flex-wrap: wrap;">
            <CardInfo  v-for="p in activities" :key="p.id" :imageUrl="p.image" :overline="p.overline" :tile="p.name"
                :precio="p.price" :descripcion="p.description" :descripcionComplete="p.descripcionComplete">

            </CardInfo>
        </div>
    </div>
</template>

<script setup>

import CardInfo from '../components/CardInfo.vue';

const activities = [
  {
    id: 1,
    name: "Rafting en el río Fonce",
    overline: "💦 AVENTURA ACUÁTICA",
    image: "img/deportes/rafting.webp",
    price: "$95.000 COP",
    description: "¡Desciende por la adrenalina de Santander!",
    descripcionComplete: `Embárcate en una aventura acuática a través del río Fonce, navegando por rápidos emocionantes rodeado de naturaleza y montañas. Ideal para quienes buscan una experiencia divertida y enérgica.<br><br><strong>Incluye:</strong><br>- Guía profesional<br>- Equipos de seguridad (casco, chaleco, remo)<br>- Transporte desde el hotel<br>- Hidratación<br><br><strong>Duración:</strong> 2 horas<br><strong>Nivel:</strong> Intermedio<br><strong>Edad mínima:</strong> 12 años`
  },
  {
    id: 2,
    name: "Parapente sobre el Cañón del Chicamocha",
    overline: "🪂 VIVE LA LIBERTAD",
    image: "img/deportes/parapente.webp",
    price: "$160.000 COP",
    description: "¡Vuela libre con la mejor vista de Colombia!",
    descripcionComplete: `Experimenta la libertad de volar sobre uno de los paisajes más impresionantes del país. Vistas panorámicas, viento fresco y una sensación que jamás olvidarás.<br><br><strong>Incluye:</strong><br>- Instructor certificado (vuelo tándem)<br>- Transporte ida y regreso<br>- Seguro de actividad<br>- Video del vuelo (opcional)<br><br><strong>Duración del vuelo:</strong> 20 a 30 minutos<br><strong>Nivel:</strong> Apto para principiantes<br><strong>Edad mínima:</strong> 14 años`
  },
  {
    id: 3,
    name: "Espeleología en cuevas de Curití",
    overline: "🕳️ NATURALEZA SUBTERRÁNEA",
    image: "img/deportes/cuevas.webp",
    price: "$85.000 COP",
    description: "Explora las entrañas de la tierra Guane.",
    descripcionComplete: `Adéntrate en misteriosas cuevas subterráneas con formaciones milenarias, ríos internos y fósiles. Una experiencia para los curiosos y amantes de la naturaleza oculta.<br><br><strong>Incluye:</strong><br>- Guía especializado<br>- Linterna frontal, casco y botas<br>- Seguro de actividad<br>- Transporte desde el hotel<br><br><strong>Duración:</strong> 3 a 4 horas<br><strong>Nivel:</strong> Moderado<br><strong>Edad mínima:</strong> 10 años`
  },
  {
    id: 4,
    name: "Torrentismo en cascadas de Juan Curí",
    overline: "⛰️ ADRENALINA EN ALTURA",
    image: "img/deportes/torrentismo.webp",
    price: "$120.000 COP",
    description: "Desciende por la fuerza del agua, ¡despierta tus sentidos!",
    descripcionComplete: `Vive la emoción de descender por una cascada de más de 60 metros, entre naturaleza viva, rocas resbaladizas y pura adrenalina.<br><br><strong>Incluye:</strong><br>- Instructor experto y guía de seguridad<br>- Arnés, casco y cuerda de descenso<br>- Seguro y transporte<br><br><strong>Duración:</strong> 2 horas<br><strong>Nivel:</strong> Intermedio–avanzado<br><strong>Edad mínima:</strong> 14 años`
  },
  {
    id: 5,
    name: "Bungee Jumping sobre el Fonce",
    overline: "🧗‍♂️ SALTO EXTREMO",
    image: "img/deportes/bungee.webp",
    price: "$150.000 COP",
    description: "Un salto que cambiará tu forma de ver el mundo.",
    descripcionComplete: `Lánzate al vacío desde una plataforma a 70 metros de altura y siente la adrenalina en su forma más pura. Solo para los valientes.<br><br><strong>Incluye:</strong><br>- Instructor certificado<br>- Arnés de seguridad y equipo profesional<br>- Seguro extremo<br>- Transporte desde el hotel<br><br><strong>Duración total:</strong> 1 hora (incluyendo preparación)<br><strong>Nivel:</strong> Alto impacto emocional<br><strong>Edad mínima:</strong> 16 años`
  },
  {
    id: 6,
    name: "Rappel en formaciones rocosas de Barichara",
    overline: "🧗 DESCENSO CONTROLADO",
    image: "img/deportes/rappel.jpg",
    price: "$70.000 COP",
    description: "Desciende con técnica y emoción entre paredes ancestrales.",
    descripcionComplete: `Una actividad perfecta para desafiar la gravedad mientras desciendes por paredes naturales con el apoyo de expertos.<br><br><strong>Incluye:</strong><br>- Guía experto y equipo certificado<br>- Arnés, cuerda, casco<br>- Hidratación y refrigerio<br>- Transporte<br><br><strong>Duración:</strong> 1.5 horas<br><strong>Nivel:</strong> Básico a intermedio<br><strong>Edad mínima:</strong> 10 años`
  }
];


</script>