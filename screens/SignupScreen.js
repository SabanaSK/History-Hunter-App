import { useState } from "react";

import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import * as http from "../util/http";

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authenticationHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    await http.signupUser(email, password);
    setIsAuthenticating(false);
  }
  if (isAuthenticating){
    return <LoadingOverlay message={"User is Creating..."}/>;
  }

  return <AuthContent onAuthenticate={authenticationHandler} />;
};

export default SignupScreen;