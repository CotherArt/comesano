<template>
  <div>
    <h1 id="menu" class="text-text"><i class="pi pi-th-large text-2xl" /> MENÚ </h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="item in store.menu">
        <img class="rounded-xl hover:border-primary" :src="item.img">
        <p class="text-center text-text">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { menuStore } from '../stores/menu';

const store = menuStore();
</script>

<style lang="scss" scoped></style>