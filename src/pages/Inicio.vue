<template>
  <div>
    <section id="intro">
      <h2 class="sub-tit">Hotel Portal Guane</h2>
      <h5>Aventura, naturaleza y descanso en un solo portal</h5>
    </section>

    <section id="info">
      <h3 class="sub-tit">Información general</h3>

      <div class="nosotros">
        <div class="sp"></div>
        <div>
          <h5>Un hotel y centro de eventos muy santandereano</h5>
          <p>
            Santander es tierra de aventura, paisajes majestuosos y una cultura
            que vive en cada rincón. En Portal Guane te invitamos a descubrir
            una parte de esa gran experiencia. Hospédate con nosotros y conecta
            con la naturaleza, la historia y la calidez que hacen de esta región
            un destino inolvidable.
          </p>

          <q-btn outline style="color: goldenrod" label="Reservar" />
        </div>

        <div class="portal">
          <img src="../assets/img/logo.jpeg" alt="" />
        </div>

        <div class="sp"></div>
      </div>
    </section>

    <section id="habitaciones">
      <h3 class="sub-tit">Habitaciones</h3>
      <div class="catalogo">
        <div class="q-pa-md">
          <q-carousel arrows animated v-model="slide" height="400px">
            <q-carousel-slide
              name="first"
              img-src="../assets/img/habitaciones/hab1.jpeg"
            >
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Suite Familiar con Terraza</div>
                <div class="text-subtitle1">
                  Espacio amplio y acogedor para compartir en familia, con una
                  terraza privada que conecta con la naturaleza.
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="second"
              img-src="../assets/img/habitaciones/hab2.jpeg"
            >
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Business Twin con Balcón</div>
                <div class="text-subtitle1">
                  Comodidad y funcionalidad para viajeros de negocios, con un
                  balcón perfecto para relajarse después de un día productivo.
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="third"
              img-src="../assets/img/habitaciones/hab3.jpeg"
            >
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Junior Suite con Balcón</div>
                <div class="text-subtitle1">
                  Elegancia y confort en un ambiente íntimo, ideal para parejas
                  que buscan una escapada con vista.
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="fourth"
              img-src="../assets/img/habitaciones/hab4.jpg"
            >
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Suite Ejecutiva con Terraza</div>
                <div class="text-subtitle1">
                  Privacidad y distinción en una suite diseñada para el descanso
                  y la inspiración, con terraza exclusiva.
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="fifth"
              img-src="../assets/img/habitaciones/hab5.jpeg"
            >
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Suite Deluxe con Balcón</div>
                <div class="text-subtitle1">
                  Un toque de lujo en medio del paisaje santandereano, con
                  balcón panorámico y detalles excepcionales.
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="sixth"
              img-src="../assets/img/habitaciones/hab6.jpg"
            >
              <div class="absolute-bottom custom-caption">
                <div class="text-h2">Habitación Business King</div>
                <div class="text-subtitle1">
                  Diseñada para el descanso eficiente y placentero, con una cama
                  King y ambiente ideal para viajeros ejecutivos.
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="texto-h">
          <h4>¡Echa un vistazo a nuestras habitaciones!</h4>
          <p>
            En Portal Guane, cada habitación ha sido diseñada para ofrecerte una
            experiencia de descanso única, combinando el confort moderno con el
            encanto rústico de la arquitectura santandereana. Nuestros espacios
            están cuidadosamente decorados con materiales naturales como piedra,
            madera y barro, creando un ambiente cálido, acogedor y en perfecta
            armonía con el entorno.
          </p>
        </div>
      </div>
    </section>

    <section id="comida">
      <h3 class="sub-tit">Nuestra comida</h3>
      <p>
        En Portal Guane, la cocina es parte fundamental de la experiencia.
        Nuestro restaurante rinde homenaje a la rica tradición culinaria de
        Santander, una tierra donde los sabores intensos, las técnicas
        ancestrales y los ingredientes frescos de la región se combinan para
        ofrecer platos auténticos y memorables. Cada menú está inspirado en
        recetas típicas que han pasado de generación en generación: desde la
        emblemática pepitoria, el cabrito con arepa de maíz pelao, hasta la
        tradicional sobrebarriga al horno y el mute santandereano, lleno de
        aromas y texturas que te conectan con la esencia de nuestra tierra. No
        faltan tampoco las delicias locales como el tamal santandereano, los
        caldos reconfortantes en la mañana, las empanadas de yuca, ni nuestras
        especialidades en carnes ahumadas y preparaciones en leña. Para los más
        aventureros, también podrás degustar el icónico hormigón, elaborado con
        hormigas culonas, símbolo de la cultura guane. Todo se acompaña con
        jugos naturales de frutas autóctonas, postres caseros como el dulce de
        cabuya y el arequipe artesanal, y el café de origen santandereano,
        cultivado en fincas cercanas. Más que una comida, en Portal Guane
        vivirás un recorrido por la identidad gastronómica de Santander, servido
        con la calidez de nuestra gente y el encanto de nuestra tradición.
      </p>

      <h4>Platos destacados</h4>

      <div class="cards">
        <CardComidasIni
          v-for="p in comidas"
          :key="p.id"
          :title="p.title"
          :rating="p.rating"
          :reviewCount="p.reviewCount"
          :imageSrc="p.imageSrc"
        ></CardComidasIni>
      </div>
    </section>

    <section id="servicios">
      <h3 class="sub-tit">Servicios extras</h3>
    </section>

    <section id="deportes">
      <h3 class="sub-tit">Deportes extremos</h3>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slide = ref("first");

import CardComidasIni from "../components/CardComidasIni.vue";

const comidas = [
  {
    id: 1,
    title: "Desayuno Típico",
    rating: 4.9,
    reviewCount: 24,
    imageSrc: "/src/assets/img/comida/desayunotip.jpg",
  },

  {
    id: 2,
    title: "Pepitoria",
    rating: 4.7,
    reviewCount: 26,
    imageSrc: "/src/assets/img/comida/pepitoria.jpg",
  },

  {
    id: 3,
    title: "Bebidas",
    rating: 4.9,
    reviewCount: 24,
    imageSrc: "/src/assets/img/comida/bebidas.jpg",
  },

  {
    id: 4,
    title: "Almuerzo santandereano",
    rating: 5.0,
    reviewCount: 35,
    imageSrc: "/src/assets/img/comida/santander.jpg",
  },
];
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

.my-card
  width: 100%
  max-width: 300px
</style>