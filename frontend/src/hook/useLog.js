import axios from "axios"
import { useState } from "react"

const useLog = () => {
    
    const [userLogged, setUserLogged] = useState()

    const logIn =  (user) => {
        return  axios.post("http://localhost:4000/api/user/signin", user)
    }

    const getEmployees = () => {
        return axios.get("http://localhost:4000/api/getemployees")  
    }

    const dataUser = (user) => {
        setUserLogged(user)
        return userLogged
    }


    return [
        logIn,
        getEmployees, 
        dataUser,
        userLogged,
        setUserLogged
    ]
}

export default useLog