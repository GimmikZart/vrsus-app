import { RoleEnum } from '@/utils/enums/role'

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/UserDashboard.vue'),
    meta: {
      requiresAuth: true,
      allowedRoles: [RoleEnum.USER, RoleEnum.ADMIN],
    },
  },
]

export default routes
