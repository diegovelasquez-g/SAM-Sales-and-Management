import axios from 'axios'
import {useState} from "react";
import { useAlerts } from './useAlerts';
import { useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode';


const baseURL = "https://localhost:7021/Users"

export const useLogin = () => {
    
    const {setalertsData,alertsData} = useAlerts()
    const navigate = useNavigate()
    const [loginData, setloginData] = useState({
        userName: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const dataLogin = (e) => {
        setloginData({...loginData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!loading){
            setLoading(true)
        }
        axios.get(baseURL+"/SignIn",{
            params: {
                userName: loginData.userName,
                password: loginData.password
            }
        }).then(data => {
            localStorage.setItem('jwt',data.data.result)
            navigate("/Home")
            
        }
        ).catch(error => {
            setLoading(false)
            console.log(error.response.data)
            setalertsData({message: error.response.data,isActive: true, type:"error"})
        })
    }
    return {
        loginData,
        dataLogin,
        handleSubmit,
        alertsData,
        loading
    }
}

