<script setup>
import { ref } from 'vue'
import { AuthService } from '../services/index.js'
const userData = ref({
    name: '',
    lastname: '',
    email: '',
    password: '',
    telephone: '',
})

async function subscribeUser() {
    console.log('ISCRITTO')
    AuthService.signInNewUser(userData.value)
}
</script>
<template>
    <div>
        <h1>REGISTER VIEW</h1>
        <v-text-field v-model="userData.name" label="Nome"></v-text-field>
        <v-text-field v-model="userData.lastname" label="Cognome"></v-text-field>
        <v-text-field v-model="userData.email" label="Email"></v-text-field>
        <v-text-field v-model="userData.password" label="Password"></v-text-field>
        <v-text-field v-model="userData.telephone" label="Telefono"></v-text-field>
    </div>
    <div>
        <v-btn @click="subscribeUser()">iscriviti</v-btn>
    </div>
</template>