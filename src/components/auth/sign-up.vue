<template>
  <form class="card flex flex-col gap-4 w-96" @submit="onSubmit">
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Usuario
      </label>
      {{ user }}
      <input name="user" class="input-text" type="text" placeholder="usuario" required v-model="user">
    </div>
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Correo
      </label>
      <input name="email" class="input-text" type="text" placeholder="correo@email.com" required v-model="email">
    </div>
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Contraseña
      </label>
      <input name="password" class="input-text" type="password" placeholder="******************" required v-model="password">
    </div>
    <button icon="pi pi-check" class="btn-primary text-white mt-4">
      <font-awesome-icon icon="fa-solid fa-check" />
      Registrarse
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const user = ref()
const email = ref()
const password = ref()

async function onSubmit(values) {
  alert(user.value)
}
</script>

<style lang="scss" scoped></style>