import { StyleSheet, Text, View, Pressable } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";

import PlacesList from "../components/places/PlacesList";
import IconButton from "../components/ui/IconButton";
import { AuthContext } from "../store/AuthContext";


const StartScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext);
  const route = useRoute();
  const places = [];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        <IconButton
          icon="logout"
          size={30}
          onPress={authCtx.logout} />
    })
  }, [authCtx, navigation]);

  console.log("allplace", route.params)
  if (route.params?.places) {
    places.push(route.params.places)
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <PlacesList places={places} />
      <View>
        {/* Alternative används button här nere */}
        <Pressable onPress={() => navigation.navigate('AddPlace')}>
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
