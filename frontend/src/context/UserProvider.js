import useLog from "../hook/useLog"
import { UserContext } from "./UserContext"



const UserProvider = ({children}) => {

    const [logIn, getEmployees, dataUser, userLogged, setUserLogged] = useLog()
    
    return (
        <UserContext.Provider value={{
            logIn,
            getEmployees,
            dataUser,
            userLogged,
            setUserLogged
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider