import { AuthApi } from '@/api/index.js'

export async function signInNewUser(userData){
    try {
        const { user, error } = await AuthApi.signInNewUser(userData)
        if(error) throw new Error(error)
        return user
    } catch (error) {
        console.error(error)
        console.error(error.message)
    }
    
}