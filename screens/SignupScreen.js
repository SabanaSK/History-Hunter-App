import { useState } from "react";

import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import * as http from "../util/http";
import { Alert } from "react-native";

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authenticationHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await http.signupUser(email, password);
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