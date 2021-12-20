import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {

    const [logUser, setLogUser] = useState({
      email: "",
      password: ""
    })
  
    const { logIn, dataUser } = useContext(UserContext)
  
    const handleSignIn = async (e) => {
        e.preventDefault()
        
        let res = await logIn(logUser)
        if(!res.data.success) {
            toast.error(res.data.response)
        } else {
            dataUser(res.data.response)
            toast.success(`Bienvenido ${res.data.response.email}`, {
                duration: 1500
            })
        }
    }
  

    return (
        <div className="container">  
            <Toaster />
            <form onSubmit={(e)=>handleSignIn(e)}>
                <input type="email" placeholder="Ingrese correo electrónico" required={true} onChange={(e)=>setLogUser({...logUser, [e.target.name]: e.target.value})} value={logUser.email} name="email"/>
                <input type="password" placeholder="Ingrese contraseña" required={true} onChange={(e)=>setLogUser({...logUser, [e.target.name]: e.target.value})} value={logUser.password} name="password"/>
                <input className="buttonSubmit" type="submit" value="Sign In"/>
            </form>
        </div>
    )
}

export default SignIn