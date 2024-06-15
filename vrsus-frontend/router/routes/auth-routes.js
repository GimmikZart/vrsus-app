const routes = [
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/views/Register.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      requiresAuth: false,
    },
  },
]

export default routes
