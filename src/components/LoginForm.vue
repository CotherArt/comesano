<template>
  <form class="card flex flex-col gap-4" @submit="onSubmit">
    <div>
      <p class="text-text text-center bg-primary relative top-10">Iniciar Sesión</p>
    </div>
    <div>
      <label class="block text-text text-sm mb-2" for="username">
        Usuario
      </label>
      <input name="user" class="input-text" type="text" placeholder="usuario" required v-model="user">
    </div>
    <div>
      <label class="block text-text text-sm mb-2" for="password">
        Contraseña
      </label>
      <input name="password" class="input-text" type="password" placeholder="******************" required v-model="password">
    </div>
    <div class="flex items-center justify-between gap-2 mt-4">
      <button icon="pi pi-check" class="btn-primary">
        <font-awesome-icon icon="fa-solid fa-check" />
        Iniciar Sesión
      </button>
      <a class="btn-tercery" href="#">
        Olvidaste tu contraseña?
      </a>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const user = ref()
const password = ref()

async function onSubmit(values) {
  alert(user.value)
}
</script>

<style lang="scss" scoped></style>