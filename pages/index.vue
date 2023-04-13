<template>
  <h1>Welcome to the jungle!</h1>
  <h2>El usuario logueado es {{ user.firstName }}</h2>
  <v-btn color="primary" class="ml-1" @click="userLogout">Cerrar sesion</v-btn>
</template>


<script lang="ts" setup>
import AuthService from "../services/auth/auth.service";
const authService = new AuthService();
const user = ref(await authService.user());
const { signOut } = useSession();

async function userLogout() {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
  }
}
</script>