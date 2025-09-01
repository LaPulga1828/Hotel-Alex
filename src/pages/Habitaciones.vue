<template>
  <div class="divhabs">
    <h1>Habitaciones</h1>

    <div class="verde-textura">
      <p>
        En el Hotel Portal Guane, cada habitación ha sido diseñada para
        ofrecer el equilibrio perfecto entre comodidad, encanto local y un toque
        moderno. Inspiradas en la riqueza cultural y natural de la región
        guanentina, nuestras estancias combinan materiales cálidos, detalles
        artesanales y un ambiente acogedor que invita al descanso. Los espacios
        son amplios, luminosos y están equipados con todo lo necesario para
        asegurar una estancia placentera: camas confortables, aire
        acondicionado, televisión por cable y conexión Wi-Fi de alta velocidad.
        Algunas habitaciones cuentan con balcones privados que ofrecen vistas
        privilegiadas al paisaje montañoso, mientras que otras se destacan por
        su ambiente acogedor ideal para el descanso después de un día de
        aventura. Con una decoración inspirada en los colores y texturas de la
        región, las habitaciones del Portal Guane buscan que cada visitante se
        sienta como en casa, disfrutando a la vez del encanto y la tranquilidad
        de un destino único.
      </p>
    </div>
    <div style="display: flex; flex-wrap: wrap" class="habs">
      <CardInfo
        v-for="p in habitaciones"
        :key="p.id"
        :imageUrl="p.image"
        :overline="p.overline"
        :tile="p.name"
        :precio="p.price"
        :descripcion="p.description"
        :descripcionComplete="p.descripcionComplete"
      >
      </CardInfo>
    </div>
  </div>
</template>

<script setup>
import CardInfo from "../components/CardInfo.vue";

const habitaciones = [
  {
    id: 1,
    name: "Suite Familiar con Terraza",
    overline: "⭐5 ESTRELLAS",
    image: "Hotel-Alex/src/assets/img/habitaciones/hab1.jpeg",
    price: "$420.000 COP",
    description: "Espacio, comodidad y vistas para compartir en familia.",
    descripcionComplete: `Perfecta para familias o grupos, esta amplia suite cuenta con dos camas dobles, una sala de estar y una terraza privada con vista a las montañas. Diseñada para el descanso y la convivencia en un ambiente acogedor y natural.<br><br><strong>Incluye:</strong><br>- 2 camas dobles<br>- Terraza privada<br>- Sala de estar<br>- Baño privado con agua caliente<br>- Wifi y ventilador<br>- Desayuno típico incluido`,
  },
  {
    id: 2,
    name: "Business Twin con Balcón",
    overline: "⭐4 ESTRELLAS",
    image: "./Hotel-Alex/src/assets/img/habitaciones/hab2.jpeg",
    price: "$280.000 COP",
    description: "Funcionalidad y tranquilidad para tus viajes de trabajo.",
    descripcionComplete: `Ideal para viajes de negocios o amigos que comparten habitación. Ofrece dos camas individuales, escritorio de trabajo y un balcón con vista al jardín. Un espacio práctico con el encanto de lo tradicional.<br><br><strong>Incluye:</strong><br>- 2 camas sencillas<br>- Balcón privado<br>- Escritorio de trabajo<br>- Wifi de alta velocidad<br>- Baño privado<br>- Desayuno típico incluido`,
  },
  {
    id: 3,
    name: "Junior Suite con Balcón",
    overline: "⭐4 ESTRELLAS",
    image: "/Hotel-Alex/src/assets/img/habitaciones/hab3.jpeg",
    price: "$350.000 COP",
    description: "Confort y calidez en una atmósfera natural.",
    descripcionComplete: `Acogedora y elegante, esta suite cuenta con una cama queen, zona de descanso y un hermoso balcón donde puedes relajarte con el canto de las aves y una vista encantadora.<br><br><strong>Incluye:</strong><br>- 1 cama queen<br>- Balcón con vista natural<br>- Zona de lectura<br>- Baño privado con ducha caliente<br>- Wifi y ventilador<br>- Desayuno típico incluido`,
  },
  {
    id: 4,
    name: "Suite Ejecutiva con Terraza",
    overline: "⭐5 ESTRELLAS",
    image: "/Hotel-Alex/src/assets/img/habitaciones/hab4.jpg",
    price: "$450.000 COP",
    description: "Comodidad premium para el viajero exigente.",
    descripcionComplete: `Esta habitación combina elegancia, amplitud y privacidad. Ideal para quienes viajan por negocios o placer, con una terraza privada perfecta para disfrutar del atardecer.<br><br><strong>Incluye:</strong><br>- 1 cama king<br>- Terraza privada con muebles exteriores<br>- Escritorio y zona de descanso<br>- Minibar<br>- Baño privado con ducha tipo lluvia<br>- Wifi de alta velocidad<br>- Desayuno tipo buffet incluido`,
  },
  {
    id: 5,
    name: "Suite Deluxe con Balcón",
    overline: "⭐5 ESTRELLAS",
    image: "/Hotel-Alex/src/assets/img/habitaciones/hab5.jpeg",
    price: "$520.000 COP",
    description: "Lujo discreto con el encanto de lo natural.",
    descripcionComplete: `Esta suite ofrece una experiencia superior de hospedaje, con acabados artesanales, amplios ventanales, y un balcón que se asoma al paisaje montañoso de Santander.<br><br><strong>Incluye:</strong><br>- 1 cama king de lujo<br>- Balcón con vista panorámica<br>- Zona de estar y decoración artesanal<br>- Baño con tina<br>- Aire acondicionado<br>- Smart TV y Wifi<br>- Desayuno gourmet incluido`,
  },
  {
    id: 6,
    name: "Habitación Business King",
    overline: "⭐4 ESTRELLAS",
    image: "/Hotel-Alex/src/assets/img/habitaciones/hab6.jpg",
    price: "$300.000 COP",
    description:
      "Simplicidad, elegancia y funcionalidad en una sola habitación.",
    descripcionComplete: `Ideal para viajeros de negocios que valoran el descanso sin complicaciones. Espaciosa, bien iluminada y equipada para trabajar cómodamente o relajarse tras un día de actividad.<br><br><strong>Incluye:</strong><br>- 1 cama king<br>- Escritorio de trabajo<br>- Baño privado con agua caliente<br>- Wifi de alta velocidad<br>- TV y ventilador<br>- Desayuno incluido`,
  },
];
</script>
