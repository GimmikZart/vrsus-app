import { supabase } from '../supabase'

export async function signInNewUser(userData){
    const { user, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
            data: {
                name: userData.name,
                lastname: userData.lastname,
                date_of_birth: userData.dateOfBirth,
                telephone: userData.telephone,
            },
        },
    })

    return { user, error }   
}