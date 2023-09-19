import { View, Text, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import OutlinedButton from "../ui/OutlinedButton";
import { createLocationUrl, getReadableAddress } from "../../util/location";

const LocationPicker = ({ locationHandler }) => {
  const [pickedLocation, setPickedLocation] = useState();
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params) {
      setPickedLocation({
        lat: route.params.latitude,
        lng: route.params.longitude,
      });
    }
  }, [route]);

  useEffect(() => {
    const getLocationDetails = async () => {
      if (pickedLocation) {
        const address = await getReadableAddress(pickedLocation);
        locationHandler({ ...pickedLocation, address });
      }
    };
    getLocationDetails();
  }, [pickedLocation, locationHandler]);

  const pickOnMapHandler = () => {
    navigation.navigate("Map");
  };

  let previewContent = <Text style={styles.text}>No picked location yet</Text>;
  if (pickedLocation) {
    previewContent = (
      <Image
        style={styles.map}
        source={{ uri: createLocationUrl(pickedLocation) }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>{previewContent}</View>
      <View style={styles.buttonContainer}>
        <OutlinedButton icon="map" pressHandler={pickOnMapHandler}>
          Pick on map
        </OutlinedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  buttonContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  preview: {
    width: "100%",
    height: 250,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  text: {
    textAlign: "center",
  },
});

export default LocationPicker;
