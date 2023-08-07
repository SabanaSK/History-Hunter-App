import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import StartScreen from "./screens/StartScreen";
import AuthContextProvider, { AuthContext } from "./store/AuthContext";
import { useContext } from "react";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const authCtx = useContext(AuthContext)

  return (
    <NavigationContainer>
      {authCtx.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>

  );
};

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
