import axios from 'axios'
import {useState} from "react";
import { useAlerts } from './useAlerts';

const baseURL = "https://localhost:7021/Users/SignUp"

export const useRegister = () => {
    const {setalertsData,alertsData} = useAlerts()
    const [registerData,setRegisterData] = useState ({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const dataRegister = (e) => {
        setRegisterData({...registerData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(registerData.password === registerData.confirmPassword){
            const userData = {
                id: "",
                name: "",
                userName: registerData.userName,
                email: registerData.email,
                password: registerData.password
            }
            axios.post(baseURL,userData)
            .then (response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
                setalertsData({message: error.response.data,isActive: true, type:"error"})
            })
        }else{
            setalertsData({message: "Las contraseñas no son iwales",isActive: true, type:"error"})
        }
        
    }
    return {
        dataRegister,
        registerData,
        handleSubmit,
        alertsData
    }
}