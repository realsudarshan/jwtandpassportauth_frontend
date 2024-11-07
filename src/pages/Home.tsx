import { useNavigate } from "react-router-dom";

function Home() {
    const navigate=useNavigate()
    return ( <>Welcome to home
     <div>
        <button onClick={() => navigate('/login')}>Go to Login</button>
        <button onClick={() => navigate('/register')}>Go to Register</button>
        
      </div></> );
}

export default Home;