import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  uid: "",
  isAuthenticated: false,
  authenticate: (token, uid) => { },
  logout: () => { }
})

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [uid, setUid] = useState(null);
  const isAuthenticated = !!token;
  const authenticate = (token, uid) => {
    if (token) {
      setToken(token);
      AsyncStorage.setItem("appToken", token);
    }
    if (uid) {
      setUid(uid);
      AsyncStorage.setItem("appUid", uid);
    }
  };

  const logout = () => {
    setToken(null);
    setUid(null);
    AsyncStorage.removeItem("appToken")
    AsyncStorage.removeItem("appUid");
  };

  const value = {
    token,
    uid,
    isAuthenticated,
    authenticate,
    logout,

  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}

export default AuthContextProvider;