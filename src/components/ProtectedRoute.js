import jwtDecode from "jwt-decode"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const ProtectedRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    const token=localStorage.getItem('jwt')
    if(!token){
        return <Navigate to="/SignIn" />
    }else{
        const decodedToken = jwtDecode(token)
        const expirationDate = new Date(decodedToken.exp * 1000);
        const dateNow = new Date
        if(expirationDate < dateNow){
            localStorage.clear('jwt')
            return <Navigate to="/SignIn" />
        }
        return children ? children : <Outlet />
        
    }
}