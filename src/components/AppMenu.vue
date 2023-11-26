<template>
  <div>
    <h1 class="text-3xl text-text mt-2 mb-4 text-center">MENÚ</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 place-items-center gap-4 my-4">
      <div v-for="item in store.menu">
        <AppMenuCard :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { menuStore } from '../stores/menu';

import AppMenuCard from './AppMenuCard.vue';

const store = menuStore();

const hover = false;
</script>

<style lang="scss" scoped></style>