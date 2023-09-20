import { StyleSheet, Text, View, Pressable } from "react-native";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import IconButton from "../components/ui/IconButton";
import { AuthContext } from "../store/AuthContext";
import { getImageUriFromDatabase } from "../util/database";
import ProfileImage from "../components/ScreensComp/ProfileImage";
import GetHunt from "../components/ScreensComp/GetHunt";
import { Colors } from "../constants/Colors";

const StartScreen = ({ navigation }) => {
  const [images, setImages] = useState(null);
  const authCtx = useContext(AuthContext);
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton icon="logout" size={30} onPress={authCtx.logout} />
      ),
    });
  }, [authCtx, navigation]);

  useEffect(() => {
    const fetchImageUri = async () => {
      try {
        const uri = await getImageUriFromDatabase();
        setImages(uri);
      } catch (error) {
        console.error("Error fetching image URI:", error);
      }
    };

    fetchImageUri();
  }, [isFocused]);

  return (
    <View style={styles.rootContainer}>
      <ProfileImage images={images} />
      <GetHunt />
      <View>
        <Pressable onPress={() => navigation.navigate("CreateHunt")}>
          <Text style={styles.createHunt}>Create Hunt</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    display: "flex",
    padding: 30,
  },
  createHunt: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 40,
    textAlign: "center",
    color: Colors.yellow,
  },
});

export default StartScreen;
