import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import PlacesList from "../components/places/PlacesList";
import IconButton from "../components/ui/IconButton";
import { AuthContext } from "../store/AuthContext";
import {
  getAllPlacesAsync,
  deleteAllPlacesAsync,
  getImageUriFromDatabase,
  deleteAllImagesAsync
} from "../util/database";
import AuthProfile from "../components/Auth/AuthUserName";
import ProfileImage from "../components/ScreensComp/ProfileImage";

const StartScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext);
  const [places, setPlaces] = useState([]);
  const isFocused = useIsFocused();
  const [images, setImages] = useState(null);

 

  const handleResetData = async () => {
    Alert.alert(
      "Confirm Reset",
      "Are you sure you want to delete all data?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await deleteAllPlacesAsync();
            await deleteAllImagesAsync();

            // Reload places
            const allPlaces = await getAllPlacesAsync();
            setPlaces(allPlaces);

            /* KAn lägg refresh for image här om vill */
          },
        },
      ]
    );
  };



  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <IconButton
          icon="delete-outline"
          size={30}
          onPress={handleResetData}
          style={styles.headerLeftIcon}
        />
      ),
      headerRight: () => (
        <IconButton
          icon="logout"
          size={30}
          onPress={authCtx.logout}
        />
      ),
    });
  }, [authCtx, navigation]);


  useEffect(() => {
    const loadPlaces = async () => {
      const allPlaces = await getAllPlacesAsync();
      setPlaces(allPlaces);
    };
    loadPlaces();
  }, [isFocused]);

  useEffect(() => {
    const fetchImageUri = async () => {
      try {
        const uri = await getImageUriFromDatabase();
        setImages(uri);
       
      } catch (error) {
        console.error('Error fetching image URI:', error);
      }
    };

    fetchImageUri();
  }, [isFocused]);


  return (
    <View style={styles.rootContainer}>
      <ProfileImage images={images} />
      <AuthProfile />
      <View>
        <Text style={styles.title}>Active Hunt</Text>
        <PlacesList places={places} />
      </View>
      <View>
        <Text style={styles.title}>Planned Hunt</Text>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate('AddPlace')}  >
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
  }
});

export default StartScreen;
