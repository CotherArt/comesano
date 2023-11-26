<template>
  <div @mouseover="hover = true" @mouseout="hover = false">
    <div class="relative">
      <img class="rounded-xl hover:border-primary w-80" :src="props.item.img">
      <button class="w-full absolute bottom-0
            bg-primary
            text-text
            py-4
            " v-if="hover">add to cart</button>
    </div>
    <p class="text-center text-text">{{ props.item.name }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const hover = ref(false);

const props = defineProps({
  item:{
    img:String,
    name:String,
    price:String
  }
})
</script>

<style lang="scss" scoped></style>