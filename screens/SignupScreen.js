import { useState, useContext } from "react";

import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import * as http from "../util/http";
import { AuthContext } from "../store/AuthContext";


const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext)

  const authenticationHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await http.signupUser(email, password);
      authCtx.authenticate(token);

    } catch (error) {
      console.log(JSON.stringify(error))
      alert("Wrong Credentials")
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message={"User is Creating..."} />;
  }

  return <AuthContent onAuthenticate={authenticationHandler} />;
};

export default SignupScreen;