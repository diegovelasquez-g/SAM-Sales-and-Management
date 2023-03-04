import {React,useState} from "react"
import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/login"
import { HomePage } from "./pages/home"
import { RegisterPage } from "./pages/signUp"
import { ProtectedRoute } from "./components/ProtectedRoute"
export const AppRouter = () => {
    const [user, setUser] = useState({
        userName: '',
        isAuth: false
    })
    
     return (
        <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/SignIn" element={<LoginPage />} />
            <Route path="/Home" element={
                <ProtectedRoute user={user.isAuth}>
                    <HomePage />
                </ProtectedRoute>
            }/>
            <Route path="/SignUp" element={<RegisterPage />} />
        </Routes>
     )
}