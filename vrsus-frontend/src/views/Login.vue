<script setup>
import { ref, computed } from 'vue'
import { AuthService } from '../services/index.js'
import { useAuthStore } from '../stores/auth.js'  
const email = ref('')
const password = ref('')
const authStore = useAuthStore()

const user = computed(() => authStore.user)
const session = computed(() => authStore.session)

async function login() {
    await AuthService.login(email.value, password.value)
}
</script>

<template>
    <h1>LOGIN</h1>
    <v-text-field v-model="email" type="email" label="Email"></v-text-field>
    <v-text-field v-model="password" type="password" label="Password"></v-text-field>
    <v-btn @click="login()">Login</v-btn>
    <v-btn @click="AuthService.logout()">LOGOUT</v-btn>
</template>