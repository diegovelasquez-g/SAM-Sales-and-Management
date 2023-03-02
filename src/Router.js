import React from "react"
import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/login"
import { HomePage } from "./pages/home"
import { RegisterPage } from "./pages/signUp"

export const AppRouter = () => {
     return (
        <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/SignIn" element={<LoginPage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/SignUp" element={<RegisterPage />} />
        </Routes>
     )
}