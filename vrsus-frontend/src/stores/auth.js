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
  }

  async function emptySession() {
    this.user = null
    this.userDetails = null
    this.session = null
    await storage.remove('session')
    await storage.remove('user')
  }

  function startSessionExpiryCheck() {
    const expiryTime = this.session.expiresAt * 1000 - Date.now()
    setTimeout(() => {
      AuthService.logout()
    }, expiryTime)
  }

  async function loadSessionFromStorage() {
    const session = await storage.get('session')
    const user = await storage.get('user')

    if (session && user) {
      this.session = JSON.parse(session)
      this.user = JSON.parse(user)
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
