import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import * as http from "../util/http";

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authenticationHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    await http.signupUser(email, password);
    setIsAuthenticating(false);
  }

  /* Här sätt krav på om det är isAuthenticating vad ska den visa */
  /* Om det är !isAuthenticating vad som ska visa? */


  return <AuthContent onAuthenticate={authenticationHandler} />;
};

export default SignupScreen;