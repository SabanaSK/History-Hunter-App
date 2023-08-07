import { createContext, useState } from "react";


export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {}
})

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const isAuthenticated = !!token;
  const authenticate = setToken;
  const logout = () => setToken(null);

  const value = {
    token,
    isAuthenticated,
    authenticate,
    logout,
 
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}

export default AuthContextProvider;