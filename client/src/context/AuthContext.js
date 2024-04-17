import Cookies from "js-cookie";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!Cookies.get("session") && !!JSON.parse(Cookies.get("session")).token;
  });

  const [userData, setUserData] = useState(() => {
    const storedUserData = Cookies.get("session");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  console.log("Auth State Login is ", isLoggedIn);

  const handleLogout = () => {
    setIsLoggedIn(false);
    Cookies.remove("session",  { domain: "maid-hiring.vercel.app"});
    setUserData(null);
  };

  const handleLogin = (data) => {
    console.log("Setting user data:", data);
    setUserData(data);
    setIsLoggedIn(true);
    Cookies.set("session", JSON.stringify(data));
  };


  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData, handleLogout, handleLogin }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
