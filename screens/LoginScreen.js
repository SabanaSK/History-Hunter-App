import { useState } from "react";

import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import * as http from "../util/http";


const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authenticationHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    const data = await http.signinUser(email, password);
    console.log("data:", data)
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message={"Logging in..."} />;
  }

  return <AuthContent isLogin onAuthenticate={authenticationHandler} />
};

export default LoginScreen;