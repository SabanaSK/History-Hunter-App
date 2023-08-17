import { StyleSheet, Text, View, Pressable } from "react-native";
import { useContext, useLayoutEffect } from "react";

import PlacesList from "../components/places/PlacesList";
import IconButton from "../components/ui/IconButton";
import { AuthContext } from "../store/AuthContext";

const StartScreen = ({ navigation }) => {
const authCtx = useContext(AuthContext);

useLayoutEffect(() => {
navigation.setOptions({
  headerRight: () =>  
  <IconButton
  icon="logout"
  size={30}
  onPress={authCtx.logout} />
})
}, [])
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <PlacesList />
      <View>
        {/* Alternative används button här nere */}
        <Pressable onPress={() => navigation.navigate('Create Hunt')}>
          <Text>Create Hunt</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default StartScreen;
