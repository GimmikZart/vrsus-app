import { RoleEnum } from '../../utils/role.js'

console.log('RoleEnum', RoleEnum.USER);
const routes = [
  {
    path: '/dashboard',
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'user/:id',
        name: 'user-dashboard',
        component: () => import('../../views/dashboard/UserDashboard.vue'),
        meta: {
          requiresAuth: true,
          allowedRoles: [RoleEnum.USER],
        }
      },
      {
        path: 'staff/:id',
        name: 'staff-dashboard',
        component: () => import('../../views/dashboard/StaffDashboard.vue'),
        meta: {
          requiresAuth: true,
          allowedRoles: [RoleEnum.STAFF],
        }
      },
      {
        path: 'admin/:id',
        name: 'admin-dashboard',
        component: () => import('../../views/dashboard/AdminDashboard.vue'),
        meta: {
          requiresAuth: true,
          allowedRoles: [RoleEnum.ADMIN],
        }
      },
    ],
  },
]

export default routes
