import { AuthApi } from '../../api/index'
import { useAuthStore } from '../../stores/auth'

export async function signInNewUser(userData){
    try {
        const { user, error } = await AuthApi.signInNewUser(userData)
        if(error) throw new Error(error)
        console.log('SUCCESS', user);
        return user
    } catch (error) {
        console.log('ERRORE');
        console.error(error)
        console.error(error.message)
    }
}

export async function login(email, password){
    const authStore = useAuthStore()
    try {
        const { data: loginData, error: loginError } = await AuthApi.login(email, password)
        if(loginError) throw new Error(loginError)

        const userId = loginData.user.id

        const { data: userData, error: userDataError } = await AuthApi.getUserData(userId)

        if(userDataError) throw new Error(userDataError)

        authStore.initUser(userData, loginData.session)
    } catch (error) {
        console.log('ERRORE');
        console.error(error)
        console.error(error.message)
    }  
}