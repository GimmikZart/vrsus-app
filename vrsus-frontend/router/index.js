import { createRouter, createWebHistory } from 'vue-router'
import AuthRoutes from './routes/auth-routes.js'
import UserRoutes from './routes/user-routes.js'
import ReviewsRoutes from './routes/reviews-routes.js'
import { useAuthStore } from '@/stores/auth.js'
import { showErrorSnackbar } from '@/utils/snackbar.js'

const routes = [...AuthRoutes, ...UserRoutes, ...ReviewsRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const requiresAuth = to.meta.requiresAuth
  const isAuthenticated = authStore.isAuthenticated
  const allowedRoles = to.meta.allowedRoles

  if (requiresAuth && !isAuthenticated) {
    return next({ name: 'login' })
  }
  else if (allowedRoles && !allowedRoles.includes(authStore.user.role)) {
    showErrorSnackbar(403, 'Ops, you don\'t have permission to access this page')
    return next({ name: 'dashboard' })
  }

  next()
})

export default router
