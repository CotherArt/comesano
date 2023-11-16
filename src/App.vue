<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <Navbar />
  <div id="content" class="h-screen overflow-y-scroll">
    <div class="py-1 px-4 md:px-40 min-h-screen">
      <RouterView  />
    </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>
