import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(useSessionStorage('vrsus-user', {}))
  const session = ref(useSessionStorage('vrsus-session', {}))

  const isAuthenticated = computed(() => !!session.value.access_token)

  function initUser(userData, sessionData) {
    user.value = {
      name: userData.name,
      lastname: userData.lastname,
      email: userData.email,
      dateOfBirth: userData.date_of_birth,
      telephone: userData.telephone,
      appRole: userData.app_role,
    }
    session.value = {
      accessToken: sessionData.access_token,
      refreshToken: sessionData.refresh_token,
      expiresIn: sessionData.expires_in,
      expiresAt: sessionData.expires_at,
      tokenType: sessionData.token_type,
    }
  }


  return {
    isAuthenticated,
    initUser,
    user
  }
})
