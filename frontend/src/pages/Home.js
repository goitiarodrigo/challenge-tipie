
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const [employees, setEmployees] = useState([])
    const [sortedEmployees, setSortedEmployees] = useState([])
    const [type, setType] = useState("")
    const [loader, setLoader] = useState(false)

    const { getEmployees, userLogged } = useContext(UserContext)

    const getAllEmployees = async () => {
        try {
            let res = await getEmployees()
            setEmployees(res.data.response)
            setLoader(true)
        } catch(error) {
            toast.error(error, {
                duration: 1000
            })
        }
    }

    useEffect(()=> {
       getAllEmployees()
       
    }, [])

    useEffect(()=> {
        let sortedEmployees = [...employees]

        const sort = () => {
            switch (type) {
                case "name":
                    sortedEmployees.sort((a, b) => {return a.name.localeCompare(b.name)})
                    break;
                case "sector":
                    sortedEmployees.sort((a, b) => {return a.sector.localeCompare(b.sector)})
                    break;
                case "age":
                    sortedEmployees.sort((a, b) => {return a.age.localeCompare(b.age)})
                    break;
                case "email":
                    sortedEmployees.sort((a, b) => {return a.email.localeCompare(b.email)})
                   break; 
            
                default:
                    break;
            }
        }

        sort()
        setSortedEmployees(sortedEmployees)
    }, [employees, type])

    const handleSort = (typeOf) => {
        if (!userLogged) {
            toast.error("Debe estar logueado para poder ordenar", {
                duration: 750
            })
        } else setType(typeOf)
    }


    if (!loader){
        return (
            <div className="container">
                <img style={{height: "50px"}} src="https://acegif.com/wp-content/uploads/loading-25.gif" alt="..."/>
            </div>
            
        )
    }

    return (
        <>
            <Toaster />
            <div className="container">
            <div className="highscoreContainer">
                    <table className="highScore">
                        <thead>
                            <tr>
                                <th >Nombre de empleado <span ><svg style={{cursor: "pointer"}} onClick={()=>handleSort("name")} aria-hidden="true" focusable="false" fill={type === "name" ? "black" : "gray"} height="20px" width="20px" data-prefix="fas" data-icon="sort-down" className="svg-inline--fa fa-sort-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></span></th>
                                <th >Sector  <span><svg style={{cursor: "pointer"}} onClick={()=>handleSort("sector")} aria-hidden="true" focusable="false" fill={type === "sector" ? "black" : "gray"} height="20px" width="20px" data-prefix="fas" data-icon="sort-down" className="svg-inline--fa fa-sort-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></span></th>
                                <th >Edad <span><svg style={{cursor: "pointer"}} onClick={()=>handleSort("age")} aria-hidden="true" focusable="false" fill={type === "age" ? "black" : "gray"} height="20px" width="20px" data-prefix="fas" data-icon="sort-down" className="svg-inline--fa fa-sort-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></span></th>
                                <th >Email <span><svg style={{cursor: "pointer"}} onClick={()=>handleSort("email")} aria-hidden="true" focusable="false" fill={type === "email" ? "black" : "gray"} height="20px" width="20px" data-prefix="fas" data-icon="sort-down" className="svg-inline--fa fa-sort-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedEmployees.map(employee => {
                                return (
                                    <tr key={employee._id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.sector}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.email}</td>
                                    </tr>
                                    )
                            })
                                }
                        </tbody>
                    </table>
            </div>
            
        </div>
        </>
    )
}

export default Home