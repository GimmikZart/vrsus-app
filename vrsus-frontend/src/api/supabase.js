import { createClient } from '@supabase/supabase-js'

const isEmulator = () => {
    // Determina se l'applicazione è in esecuzione nell'emulatore
    return navigator.userAgent.includes('Android') && navigator.userAgent.includes('wv')
}

const supabaseUrl = isEmulator() ? import.meta.env.VITE_SUPABASE_EMULATOR_URL : import.meta.env.VITE_SUPABASE_WEB_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)