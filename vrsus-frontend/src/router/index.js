import { createRouter, createWebHistory } from '@ionic/vue-router'
import AuthRoutes from './routes/auth-routes.js'
import UserRoutes from './routes/user-routes.js'
import { useAuthStore } from '../stores/auth.js'

const routes = [...AuthRoutes, ...UserRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  console.log('BEFORE ROUTE');
  console.log('meta', to.meta);
  console.log('allowedRoles', to.meta.allowedRoles);
  const authStore = useAuthStore()
  const requiresAuth = to.meta.requiresAuth
  const isAuthenticated = authStore.isAuthenticated
  const allowedRoles = to.meta.allowedRoles

  console.log('requiresAuth', requiresAuth);
    console.log('authStore', authStore);
  console.log('isAuthenticated', isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    console.log('subito a login');
    return next({ name: 'login' })
  }

  if (allowedRoles && !allowedRoles.includes(authStore?.user?.appRole ?? -1)) {
    console.log('NON SEI AUTORIZZATO');
    //showErrorSnackbar(403, 'Ops, you don\'t have permission to access this page')
    return next({ name: 'login' })
  }

  next()
})

console.log('ROUTES', router);
export default router
