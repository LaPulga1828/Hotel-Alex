<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card"   flat bordered>
            <q-img :src="props.imageUrl" />

            <q-card-section color="card">
                <div class="text-overline text-orange-9">{{ props.overline }}</div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{ props.tile }}</div>
                <div class="text-caption text-grey">
                    {{ props.descripcion }}
                </div>
            </q-card-section>

            <q-card-actions>
                <q-btn flat color="pr" :label="props.precio" />
                <q-btn flat color="secondary" label="Reservar" />

                <q-space />

                <q-btn color="grey" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                    @click="expanded = !expanded" />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="expanded">
                    <q-separator />
                    <q-card-section class="text-subtitle2">
                        {{ props.descripcionComplete }}
                    </q-card-section>
                </div>
            </q-slide-transition>
        </q-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref(false)
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const props= defineProps({
    imageUrl:{
        type:String,
        require:true
    },

    overline:{
        type:String,
    },

    tile:{
        type:String,
        require:true
    },

    precio:{
        type:String,
        require:true
    },

    descripcion:{
        type:String,
        require:true
    },

    descripcionComplete:{
        type:String,
        require:true
    },
});


</script>

<style lang="sass" scoped>

.my-card
  width: 100%
  max-width: 380px
  background-color: #f3efe6
</style>
