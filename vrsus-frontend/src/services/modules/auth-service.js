import { AuthApi } from '../../api/index'

export async function signInNewUser(userData){
    try {
        const { user, error } = await AuthApi.signInNewUser(userData)
        if(error) throw new Error(error)
        console.log('SUCCESS', user);
        return user
    } catch (error) {
        console.log('errore');
        console.error(error)
        console.error(error.message)
    }
    
}