
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Assuming you have some way to check if the user is authenticated
  const isAuthenticated = localStorage.getItem('jwt'); // Example of using localStorage

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/" />;
  }

  // Render the child route if authenticated
  return <Outlet />;
};

export default ProtectedRoute;