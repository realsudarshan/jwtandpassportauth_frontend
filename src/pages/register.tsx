import { useNavigate } from "react-router-dom"
import Signupform from "../components/Signupform"


function Register() {
  const handlegooglesignup=()=>{
    
  }
  const navigate=useNavigate()
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p className="mt-4">Learn more about us.</p>
        <button onClick={() => navigate('/login')}>Go to Login</button>
        <button onClick={() => navigate('/')}>Go to Home</button>
        <button onClick={handlegooglesignup}></button>
        <Signupform/>
     
      </div>

    )
  }
  
  export default Register