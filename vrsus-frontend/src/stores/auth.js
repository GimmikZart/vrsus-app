import { defineStore } from 'pinia'
import { storage } from '../plugins/storage'
import { computed, ref } from 'vue'
import { AuthService } from '../services/index.js'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null) 
  const session = ref(null)

  const isAuthenticated = computed(() => !!session?.value?.accessToken ?? false)

  async function initUser(userData, sessionData) {
    await storage.set('user', JSON.stringify(userData))
    await storage.set('session', JSON.stringify(sessionData))
    session.value = JSON.parse(await storage.get('session'))
    user.value = JSON.parse(await storage.get('user'))
  }

  async function emptySession() {
    user.value = null
    session.value = null
    await storage.remove('session')
    await storage.remove('user')
  }

  function startSessionExpiryCheck() {
    const expiryTime = session.value.expiresAt * 1000 - Date.now()
    setTimeout(() => {
      AuthService.logout()
    }, expiryTime)
  }

  async function loadSessionFromStorage() {
    const storageSession = await storage.get('session')
    const storageUser = await storage.get('user')

    if (session.value && user.value) {
      session.value = JSON.parse(storageSession)
      user.value = JSON.parse(storageUser)
      this.startSessionExpiryCheck()
    }
  }

  return {
    isAuthenticated,
    initUser,
    user,
    session,
    emptySession,
    startSessionExpiryCheck,
    loadSessionFromStorage
  }
})
