<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="text-h6 q-mb-xs">{{ props.title }}</div>
      <div class="row no-wrap items-center">
        <q-rating
          size="18px"
          :model-value="rating"
          @update:model-value="$emit('update:rating', $event)"
          :max="5"
          color="primary"
        />
        <span class="text-caption text-grey q-ml-sm"
          >{{ props.rating }} ({{ props.reviewCount }})</span
        >
      </div>
    </q-card-section>
    <img :src="props.imageSrc" :alt="title" />
  </q-card>
</template>

<script setup>
const props=defineProps({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviewCount: {
    type: Number,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});

</script>

<style lang="sass" scoped>
.my-card
    width: 100%
    max-width: 380px
    background-color: #5f6c5a
</style>