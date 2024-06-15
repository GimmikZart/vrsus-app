<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')

function login() {
    console.log('LOGIN')
}
</script>

<template>
    <h1>LOGIN</h1>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field v-model="password" label="Password"></v-text-field>
    <v-btn @click="login()">Login</v-btn>
</template>