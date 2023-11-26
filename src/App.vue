<template>
  <div id="content" class="flex flex-col justify-between h-screen">
    <Navbar class="sticky top-0 z-10" />
    <div class="mx-5 md:mx-10">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Navbar from './components/TheNavbar.vue'
import Footer from './components/TheFooter.vue'
</script>
<style scoped>
html.dark {
  color-scheme: dark;
}
</style>
