import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import StartScreen from "./screens/StartScreen";
import AuthContextProvider, { AuthContext } from "./store/AuthContext";
import { useContext, useEffect } from "react";
import IconButton from "./components/ui/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const authCtx = useContext(AuthContext)
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () =>
          <IconButton
            icon="logout"
            size={30}
            onPress={authCtx.logout} />
      }}

    >
      <Stack.Screen name="Start" component={StartScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const authCtx = useContext(AuthContext)
  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem("appToken");
      if (token) {
        authCtx.authenticate(token)
      };
    };
    fetchToken();
  }, [authCtx]);
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
