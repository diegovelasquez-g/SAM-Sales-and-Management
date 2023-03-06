import {createContext, useEffect, useState} from 'react'

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [user, setUser] = useState({
        userName: '',
        isAuth: false
    })

    return(
        <AuthContext.Provider
            value={{
                setUser,
                user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}