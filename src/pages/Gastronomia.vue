<template>
    <div>
        <h1>Gatronomia</h1>
        <div style="display: flex; flex-wrap: wrap;">
            <CardInfo v-for="p in menus" :key="p.id" :imageUrl="p.image" :overline="p.overline" :tile="p.name"
                :precio="p.price" :descripcion="p.description" :descripcionComplete="p.descripcionComplete">

            </CardInfo>
        </div>

    </div>
</template>

<script setup>
import CardInfo from '../components/CardInfo.vue';

const menus = [
    {
        id: 1,
        name: "Menú Desayuno Típico",
        overline: "🌄 SABOR TRADICIONAL",
        image: "Hotel-Alex/src/assets/img/comida/desayunotip.jpg",
        price: "$22.000 COP",
        description: "Energía santandereana para comenzar tu día.",
        descripcionComplete: `Disfruta de un desayuno tradicional con los sabores auténticos de nuestra tierra. Preparado con ingredientes frescos y locales.<br><br><strong>Incluye:</strong><br>- Caldo de costilla o caldo de huevo<br>- Arepa santandereana<br>- Huevos al gusto<br>- Queso campesino<br>- Chocolate caliente o café<br>- Jugo natural de temporada`
    },
    {
        id: 2,
        name: "Menú Típico",
        overline: "🍲 SABOR DE NUESTRA TIERRA",
        image: "Hotel-Alex/src/assets/img/comida/pepitoria.jpg",
        price: "$36.000 COP",
        description: "Una explosión de sabor santandereano en cada plato.",
        descripcionComplete: `Vive la experiencia de nuestra gastronomía con los platos más representativos de la región, servidos con amor campesino.<br><br><strong>Platos:</strong><br>- Cabrito con yuca y pepitoria<br>- Sobrebarriga criolla<br>- Tamal santandereano<br>- Sudado de gallina criolla<br><br><strong>Acompañamientos:</strong><br>- Arroz, ensalada fresca, yuca o papa criolla<br>- Jugo natural`
    },
    {
        id: 3,
        name: "Menú Postres",
        overline: "🍮 DULCE TRADICIÓN",
        image: "Hotel-Alex/src/assets/img/comida/postres.jpg",
        price: "$12.000 COP",
        description: "El dulce final con sabor a tradición.",
        descripcionComplete: `Delicias caseras con recetas tradicionales, ideales para cerrar tu comida o acompañar una buena charla.<br><br><strong>Postres:</strong><br>- Arequipe artesanal con obleas<br>- Postre de natas<br>- Dulce de brevas con queso<br>- Torta de maíz con panela<br>- Bocadillo veleño con cuajada`
    },
    {
        id: 4,
        name: "Menú Americano",
        overline: "🥐 ESTILO INTERNACIONAL",
        image: "Hotel-Alex/src/assets/img/comida/americano.png",
        price: "$25.000 COP",
        description: "Un desayuno clásico para comenzar el día con todo.",
        descripcionComplete: `Un desayuno internacional con opciones ligeras y deliciosas, ideal para quienes prefieren un estilo más occidental.<br><br><strong>Incluye:</strong><br>- Tostadas o pan artesanal<br>- Huevos al gusto<br>- Tocinetas<br>- Mantequilla y mermelada<br>- Café americano o té<br>- Jugo de naranja natural`
    },
    {
        id: 5,
        name: "Menú Almuerzo Típico",
        overline: "🍛 ALMUERZO CON IDENTIDAD",
        image: "Hotel-Alex/src/assets/img/comida/santander.jpg",
        price: "$38.000 COP",
        description: "Sabores de hogar servidos con identidad santandereana.",
        descripcionComplete: `Platos abundantes y llenos de sabor, pensados para recargar energías con lo mejor de la cocina tradicional.<br><br><strong>Platos:</strong><br>- Pescado frito con patacones y arroz de coco<br>- Bandeja santandereana (carne oreada, chorizo, arepa, arroz, plátano)<br>- Sancocho de gallina con mazorca<br>- Lomo al trapo con papas criollas<br><br><strong>Acompañamientos:</strong><br>- Ensalada del día<br>- Bebida natural<br>- Postre casero`
    },
    {
        id: 6,
        name: "Menú Bebidas",
        overline: "🥤 REFRESCOS Y SABORES",
        image: "Hotel-Alex/src/assets/img/comida/bebidas.jpg",
        price: "Desde $4.000 COP",
        description: "Refresca el cuerpo, celebra el momento.",
        descripcionComplete: `Bebidas frías y calientes para todos los gustos, con ingredientes naturales y presentaciones artesanales.<br><br><strong>Incluye:</strong><br>- Jugos naturales (guanábana, lulo, mora, maracuyá) – $8.000<br>- Limonada de panela o hierbabuena – $7.000<br>- Café campesino o tinto – $5.000<br>- Chocolate santandereano – $6.000<br>- Cerveza artesanal Guane – $12.000<br>- Agua de panela con limón – $4.000`
    }
];


</script>