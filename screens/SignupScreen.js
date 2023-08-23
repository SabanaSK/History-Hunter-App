import { useState, useContext } from "react";

import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import * as http from "../util/http";
import { AuthContext } from "../store/AuthContext";


const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext)

  const authenticationHandler = async ({ email, password, name }) => {
    setIsAuthenticating(true);
    try {
      const { token, uid } = await http.signupUser(email, password, name);
      authCtx.authenticate(token, uid);

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