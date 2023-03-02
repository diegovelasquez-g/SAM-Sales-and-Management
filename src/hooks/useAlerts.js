import { useEffect, useState } from "react";

export const useAlerts = () => {
    
    const [alertsData, setalertsData] = useState({
        isActive: false,
        message: "",
        type: ""
    })
    
    useEffect(() => {
        if(alertsData.isActive){
         setTimeout(() =>{
             setalertsData({
                 isActive: false,
                 message: "",
                 type: ""
             })
           },3000)
        } 
       
     }, [alertsData.isActive])
    return{
        alertsData,
        setalertsData,
    }
}