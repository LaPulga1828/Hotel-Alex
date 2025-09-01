<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
            <q-img :src="props.imageUrl" class="card-img" />

            <q-card-section color="card">
                <div class="text-overline text-warning">{{ props.overline }}</div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ props.tile }}</div>
                <div class="text-caption text-white">
                    {{ props.descripcion }}
                </div>
            </q-card-section>

            <q-card-actions>
                <q-btn flat color="dark" :label="props.precio" />
                <q-btn flat color="accent" label="Reservar" />

                <q-space />

                <q-btn color="white" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                    @click="expanded = !expanded" />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="expanded">
                    <q-separator />
                    <q-card-section class="text-subtitle2 text-white">
                        <div v-html="props.descripcionComplete"></div>
                    </q-card-section>
                </div>
            </q-slide-transition>
        </q-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref(false)
const props = defineProps({
    imageUrl: {
        type: String,
        require: true
    },

    overline: {
        type: String,
    },

    tile: {
        type: String,
        require: true
    },

    precio: {
        type: String,
        require: true
    },

    descripcion: {
        type: String,
        require: true
    },

    descripcionComplete: {
        type: String,
        require: true
    },
});
</script>

<style lang="sass" scoped>

.my-card
    width: 100%
    max-width: 380px
    background-color: #5f6c5a


.card-img
    height: 350px;
    width: 377px;
    object-fit: cover;
    object-position: center;


</style>
