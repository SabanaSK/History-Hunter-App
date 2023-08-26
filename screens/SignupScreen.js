import { useState, useContext } from "react";

import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import * as http from "../util/http";
import { AuthContext } from "../store/AuthContext";
import { UserContext } from "../store/UserContext";

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext)
  const userCtx = useContext(UserContext);

  const authenticationHandler = async ({ email, password, displayName }) => {
    setIsAuthenticating(true);
    try {
      const token = await http.signupUser(email, password);
      authCtx.authenticate(token);

      const resp = await http.updateUser(displayName, token);
      await http.saveUsers({ name: displayName });

      userCtx.addUser(displayName);

    } catch (error) {
      console.log("singUp error :",error)
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