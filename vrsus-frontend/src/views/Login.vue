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
    console.log('LOGIN')
    await AuthService.login(email.value, password.value)
}
</script>

<template>
    <h1>LOGIN</h1>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field v-model="password" label="Password"></v-text-field>
    <v-btn @click="login()">Login</v-btn>
    {{ user }}
    {{ session }}
    {{ authStore.isAuthenticated }}
</template>