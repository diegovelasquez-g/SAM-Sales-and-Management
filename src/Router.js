import {React} from "react"
import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/login"
import { HomePage } from "./pages/home"
import { RegisterPage } from "./pages/signUp"
import { ProtectedRoute } from "./components/ProtectedRoute"
export const AppRouter = () => {
     return (
            <Routes>
                <Route path="/SignIn" element={<LoginPage />} />
                <Route element ={<ProtectedRoute />}>
                    <Route path="/" element={<div></div>} />
                    <Route path="/Home" element={<HomePage />}/>
                </Route>
                
                <Route path="/SignUp" element={<RegisterPage />} />
            </Routes>
     )
}