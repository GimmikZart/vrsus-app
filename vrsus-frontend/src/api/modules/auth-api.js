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

export async function login(email, password){
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    return { data, error }   
}

export async function getUserData(userId){
    const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single()

    return { data, error }   
}

export async function logout(){
    await supabase.auth.signOut()
}