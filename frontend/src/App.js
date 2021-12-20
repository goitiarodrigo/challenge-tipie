import './App.css';
import { Navigate, Route, Routes } from "react-router-dom"
import SignIn from './components/SignIn';
import Home from './pages/Home';
import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
 
  const {  userLogged } = useContext(UserContext)
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        {!userLogged && <Route path="/signin" element={<SignIn />}/>}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
