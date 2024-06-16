import { AuthApi } from '../../api/index'
import { useAuthStore } from '../../stores/auth'
import { sendToDashboard } from '../../utils/router'

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

        const user = {
            id: userData.id,
            name: userData.name,
            lastname: userData.lastname,
            email: userData.email,
            dateOfBirth: userData.date_of_birth,
            telephone: userData.telephone,
            appRole: userData.app_role,
        }
        const session = {
            accessToken: loginData.session.access_token,
            refreshToken: loginData.session.refresh_token,
            expiresIn: loginData.session.expires_in,
            expiresAt: loginData.session.expires_at,
            tokenType: loginData.session.token_type,
        }
        await authStore.initUser(user, session)
        sendToDashboard()
    } catch (error) {
        console.log('ERRORE');
        console.error(error)
        console.error(error.message)
    }  
}

export async function logout(){
    const authStore = useAuthStore()
    try {
        await AuthApi.logout()
        authStore.emptySession()
    } catch (error) {
        console.log('ERRORE');
        console.error(error)
        console.error(error.message)
    }
}