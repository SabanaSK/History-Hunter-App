import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import IconButton from "../components/ui/IconButton";
import { AuthContext } from "../store/AuthContext";
import { getImageUriFromDatabase } from "../util/database";
import ProfileImage from "../components/ScreensComp/ProfileImage";
import AuthName from "../components/Auth/AuthName";
import GetHunt from "../components/ScreensComp/GetHunt";

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
    if (images) {
      const fetchImageUri = async () => {
        const uri = await getImageUriFromDatabase();
        setImages(uri);
      };
      fetchImageUri();
    }
  }, [isFocused]);

  return (
    <View style={styles.rootContainer}>
      <ProfileImage images={images} />
      <AuthName />
      <GetHunt />
      <View>
        <Pressable onPress={() => navigation.navigate("CreateHunt")}>
          <Text style={styles.createHunt}>Create Hunt</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.medals}>MEDALS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 30,
    color: "pink",
  },
  createHunt: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
  },
  medals: {
    textAlign: "center",
    fontSize: 20,
    color: "blue",
  },
});

export default StartScreen;
