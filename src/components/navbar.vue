<template>
  <div class="flex justify-between items-center px-4 py-4 md:px-8 border-b-2 bg-background border-secondary">
    <!-- <img src="@/assets/icons/comesano_wide.png" @click="$router.push('/')" class="cursor-pointer h-16 hidden md:block"> -->
    <div class="flex cursor-pointer gap-2" @click="$router.push('/')">
      <img src="/assets/imgs/icons/comesano_64.png" />
      <p id="logo" class="font-bold text-3xl">COMESANO</p>
    </div>
    <div id="buttons" class="flex gap-2 h-10">
      <button class="btn-tercery" key="label" type="button" @click="$router.push('menu')">
        Menú
      </button>
      <button type="button" @click="$router.push('sign-up')" class="btn-secondary">
        Registrarse
      </button>
      <button type="button" @click="$router.push('login')" class="btn-primary">
        Iniciar Sesión
      </button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
#logo {
  background: rgb(20,133,39);
  background: -moz-linear-gradient(90deg, rgba(20,133,39,1) 0%, rgba(20,133,39,1) 49%, rgba(31,209,61,1) 78%);
  background: -webkit-linear-gradient(90deg, rgba(20,133,39,1) 0%, rgba(20,133,39,1) 49%, rgba(31,209,61,1) 78%);
  background: linear-gradient(90deg, rgba(20,133,39,1) 0%, rgba(20,133,39,1) 49%, rgba(31,209,61,1) 78%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#148527",endColorstr="#1fd13d",GradientType=1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>