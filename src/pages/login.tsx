import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import Loginform from "../components/Loginform";
import { useState } from "react";
import consts from '../config/consts';
import axios from "axios";
function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const handlegooglelogin=async()=>{
        console.log(process.env.REACT_APP_API_BASE_URL)
        setLoading(true);
        try {
            // Step 1: Redirect the user to Google OAuth route
            window.location.href = `${consts.API_URI}/auth/google`;

            // Step 2: Once redirected back, the server will return a JWT token
            

            // Step 3: Store the JWT token in local storage or state
        

            // Step 4: Redirect the user to a protected page
        } catch (error) {
            setError('Error logging in with Google');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    
   
    return (<>Welcome to login page
     <div>
      <h1>Login Page</h1>
      
      <button onClick={() => navigate('/')}>Go to Home</button> {/* Button to navigate back to Home */}
      <button onClick={handlegooglelogin} disabled={loading}>  {loading ? 'Logging in...' : 'Login with Google'}</button>
      <Loginform/>
      {error && <p>{error}</p>}
    </div></>  );
}

export default Login;