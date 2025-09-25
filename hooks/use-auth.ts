import { create } from 'zustand'
import { User } from '../models/user'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface AuthState {
    user: User | null
    is_authenticated: boolean
    login: (email: string, password: string) => void
    logout: () => void
    register: (new_user: User) => void
}

const useAuth = create<AuthState>(() => ({
    user: null,
    is_authenticated: false,
    login: async (email: string, password: string) => {
        try {
            const auth = getAuth()
            const user_credentials = await signInWithEmailAndPassword(auth, email, password)
            console.log(user_credentials)
        } catch (error) {
            console.error(error)
        }
    },
    logout: () => {},
    register: (new_user: User) => {console.log(new_user)},
}))

export default useAuth
