<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useAuthStore } from './stores/auth'
import { initializeStorage } from './plugins/storage'
import { onBeforeMount } from 'vue'

const authStore = useAuthStore()

onBeforeMount(async () => {
  await initializeStorage()
  await authStore.loadSessionFromStorage()
})
</script>
