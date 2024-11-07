export const getToken = () => {
    return localStorage.getItem("jwt");
  };
  
  export const isAuthenticated = ():boolean => {
    return !!getToken(); // Returns true if the token exists
  };