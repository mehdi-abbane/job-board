import { SupabaseClient } from "@supabase/supabase-js";
import supabase from "./supabaseClient";

export async function getCurrentSession() {
    const { data, error } = await supabase.auth.getSession()
    if (error) {
        throw new Error(error);
    }
    return data
}

export async function SignUp(email, password, userData) {
    const { data, error } = await supabase.auth.signUp({ email, password, options: { data: userData } });

    if (error) {
        throw new Error(error)
    }
    return data;
}
