import { createContext } from "react";

export const AuthContext = createContext({})

interface CustomInputProps {
    children: React.ReactNode
}

export function AuthProvider({ children }: CustomInputProps) {
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}

