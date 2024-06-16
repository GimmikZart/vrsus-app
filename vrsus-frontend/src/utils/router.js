import router from '../router'
import { RoleEnum } from '../utils/role.js'
import { useAuthStore } from '../stores/auth.js'

function sendToDashboard(){
    console.log('SEND TO DASHBOARD');
    const authStore = useAuthStore()
    console.log('authStore.user.role', authStore.user.role);
    if(authStore.user.appRole === RoleEnum.USER) {
        console.log('USER');
        router.push(`/dashboard/user/${authStore.user.id}`)
    } else if(authStore.user.appRole === RoleEnum.STAFF) {
        console.log('staff');
        router.push(`/dashboard/staff/${authStore.user.id}`)
    } else if(authStore.user.appRole === RoleEnum.ADMIN) {
        console.log('admin');
        router.push(`/dashboard/admin/${authStore.user.id}`)
    } else  {
        console.log('nessuno');
        router.push('/login')
    }
        
}

export { sendToDashboard }