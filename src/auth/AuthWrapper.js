import { createContext, useContext, useState } from "react";
import { RenderHeader } from "../components/structure/Header";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";

// Create the authentication context
const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

// Authentication wrapper component
export const AuthWrapper = () => {
     // State to hold user authentication information
     const [user, setUser] = useState({ name: "", isAuthenticated: false });

     // Function to perform login
     const login = (email, password) => {
          // Make a call to the authentication API to check the credentials
          return fetch("http://localhost:9000/api/login", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({ email, password }),
          })
               .then((response) => {
                    if (!response.ok) {
                         throw new Error("Network response was not ok");
                    }
                    return response.json();
               })
               .then((data) => {
                    // Assuming your API returns a token upon successful authentication
                    const { token } = data;
                    // Update user state with authenticated user information
                    setUser({ name: email, isAuthenticated: true, token });
                    // Resolve promise with success message
                    return "success";
               })
               .catch((error) => {
                    // Update user state to indicate authentication failure
                    setUser({ name: "", isAuthenticated: false });
                    // Reject promise with error message
                    throw new Error("Authentication failed");
               });
     };

     // Function to perform logout
     const logout = () => {
          // Update user state to indicate user is not authenticated
          setUser({ name: "", isAuthenticated: false });
     };

     // Provide authentication context to children components
     return (
          <AuthContext.Provider value={{ user, login, logout }}>
               <>
                    <RenderHeader />
                    <RenderMenu />
                    <RenderRoutes />
               </>
          </AuthContext.Provider>
     );
};
