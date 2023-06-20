import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const App = () => {

    return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
      );
    };