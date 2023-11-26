<template>
  <div class="flex justify-between items-center px-4 py-4 md:px-8 border-b-2 bg-background border-secondary">
    <div class="flex cursor-pointer gap-2" @click="$router.push('/')">
      <img src="/assets/imgs/icons/comesano_64.png" />
      <p id="logo" class="font-bold text-3xl hidden xl:block">COMESANO</p>
    </div>
    <div id="buttons" class="flex gap-2 h-16 sm:h-10 text-sm sm:text-base">
      <button class="btn-tercery" key="label" type="button" @click="$router.push('menu')">
        Menú
      </button>
      <button type="button" @click="$router.push('signUp')" class="btn-secondary">
        Registrarse
      </button>
      <button type="button" @click="$router.push('login')" class="btn-primary">
        Iniciar Sesión
      </button>
      <button @click="toggleDark()" class="text-text">
        <font-awesome-icon v-if="isDark" icon="fa-solid fa-sun" />
        <font-awesome-icon v-else icon="fa-solid fa-moon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);


console.log(isDark.value)

</script>

<style scoped>
#logo {
  background: rgb(20, 133, 39);
  background: -moz-linear-gradient(90deg, rgba(20, 133, 39, 1) 0%, rgba(20, 133, 39, 1) 49%, rgba(31, 209, 61, 1) 78%);
  background: -webkit-linear-gradient(90deg, rgba(20, 133, 39, 1) 0%, rgba(20, 133, 39, 1) 49%, rgba(31, 209, 61, 1) 78%);
  background: linear-gradient(90deg, rgba(20, 133, 39, 1) 0%, rgba(20, 133, 39, 1) 49%, rgba(31, 209, 61, 1) 78%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#148527", endColorstr="#1fd13d", GradientType=1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>