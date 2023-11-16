<template>
  <div>
    <Galleria 
      :value="WidePromos" :numVisible="5" :showThumbnails="false" :showIndicators="true"
      :showIndicatorsOnItem="true" indicatorsPosition="bottom" :circular="true"
      :autoPlay="true" :transitionInterval="3000">
      <template #item="slotProps">
        <img :src="slotProps.item.ImageSrc" :alt="slotProps.item.alt"
          class="rounded-2xl w-full" />
      </template>
    </Galleria>
  </div>
</template>

<script setup>
import Galleria from 'primevue/galleria';

const WidePromos = [
  {
    ImageSrc: '/assets/imgs/wide_promos/wp01.jpg'
  },
  {
    ImageSrc: '/assets/imgs/wide_promos/wp02.jpg'
  },
  {
    ImageSrc: '/assets/imgs/wide_promos/wp03.jpg'
  },
  {
    ImageSrc: '/assets/imgs/wide_promos/wp04.jpg'
  },
]
</script>

<style scoped></style>