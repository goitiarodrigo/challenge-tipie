import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import toast, { Toaster } from "react-hot-toast"


const Header = () => {

    const { userLogged, setUserLogged } = useContext(UserContext)

    const handleCloseSesion = () => {
        toast.success("👋 Hasta pronto", {
            duration: 1000
        })
        setUserLogged(null)
    }

    return (
        <nav  className="navContainer">
            <Toaster />
            <div className="logoContainer">
            </div>
            <div className="navLinksContainer">
                <div>
                    <NavLink style={({isActive})=> ({textDecoration: isActive ? "underline" : "none" })} to="/" >Home</NavLink>
                    {!userLogged ? <NavLink style={({isActive})=> ({textDecoration: isActive ? "underline" : "none" })} to="/signin" >Sign In</NavLink>
                    : <span onClick={handleCloseSesion} >Cerrar sesión</span>   
                    }

                </div>
            </div>
        </nav>
    )
}

export default Header