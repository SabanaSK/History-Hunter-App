import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import StartScreen from "./screens/StartScreen";
import MapScreen from "./screens/MapScreen";
import AddPlaceScreen from "./screens/AddPlaceScreen";
import AuthContextProvider, { AuthContext } from "./store/AuthContext";
import { initializeDBAsync, initializeImagesDBAsync } from "./util/database";
import EditProfileScreen from "./screens/EditProfileScreen";


const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {

  useEffect(() => {
    const initDB = async () => {
      try {
        await initializeDBAsync();
        await initializeImagesDBAsync();
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error(error);
      }
    };
    initDB();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="AddPlace" component={AddPlaceScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
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
      {/* Man kan lägga till mer context här */}
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
