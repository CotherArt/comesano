<template>
  <div>
    <h1 id="menu" class="text-green-700"><i class="pi pi-th-large text-2xl" /> MENÚ </h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <img v-for="item in store.menu"
        class="rounded-xl hover:border-primary-700"
        :src="item.img">
    </div>
  </div>
</template>

<script setup>
import { menuStore } from '@/stores/menu';

const store = menuStore();
</script>

<style lang="scss" scoped>

</style>