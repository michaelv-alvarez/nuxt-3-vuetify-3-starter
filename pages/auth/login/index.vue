<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4" lg="4" xl="4" align="center" align-self="center">
        <v-col cols="12">
          <v-card color="#fff" flat tile elevation="0">
            <v-card-title>
              <v-row justify="center" align="center">
                <span class="mb-3 mt-3 text-h5 text-center font-weight-bold"
                  >Iniciar sesion</span
                >
              </v-row>
            </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="login.email"
                solo
                label="Correo electrónico"
                prepend-inner-icon="mdi-email-outline"
                type="email"
              />

              <v-text-field
                v-model="login.password"
                solo
                prepend-inner-icon="mdi-lock-open-variant-outline"
                label="Contraseña"
                :type="showPassword ? 'text' : 'password'"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"
                @keyup.enter="userLogin"
              />

              <v-btn
                color="primary"
                block
                @click="userLogin"
                @keyup.enter="userLogin"
              >
                <b>Ingresar</b>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<!-- <template>
  <div>
    <p>Sign-In Options:</p>
    <button @click="signIn('credentials', { email: 'bcontartese@codesolutions.com.ar', password: 'secret', callbackUrl: '/dashboard' })">Username and Password</button>
  </div>
</template> -->

<script lang="ts" setup>
import { LoginCredentials } from "@/interfaces/auth/login-credentials.interface";
const { signIn } = useSession();
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});

const login: Ref<LoginCredentials> = ref({
  email: "",
  password: "",
});

const showPassword: Ref<Boolean> = ref(false);

async function userLogin() {
  try {
    await signIn("credentials", {
      email: login.value.email,
      password: login.value.password,
    });
  } catch (error: unknown) {
    console.log(error);
  }
}
</script>

<style>
.v-application--wrap {
  background-color: #e5e5e5;
}

#loginText {
  color: #000 !important;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  font-family: Inter;
}
</style>