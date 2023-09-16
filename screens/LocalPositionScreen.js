import React, { useEffect, useState } from "react";
import { View, Button, Alert } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

import { fetchRouteDirections } from "../util/location";
import * as Location from "expo-location";

const LocalPositionScreen = ({ route }) => {
  const { details } = route.params;
  const [userLocation, setUserLocation] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const navigation = useNavigation();

  const destination = {
    name: details.name,
    coordinate: {
      latitude: details.location.lat,
      longitude: details.location.lng,
    },
  };

  useEffect(() => {
    const getUserLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Permission to access location was denied."
        );
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      setUserLocation({ latitude, longitude });
    };

    getUserLocation();
  }, []);

  const toRad = (value) => {
    return (value * Math.PI) / 180;
  };

  const isUserNearDestination = (
    userLocation,
    destinationLocation,
    thresholdInMeters = 50
  ) => {
    const R = 6371000; 
    const dLat = toRad(destinationLocation.latitude - userLocation.latitude);
    const dLon = toRad(destinationLocation.longitude - userLocation.longitude);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(userLocation.latitude)) *
        Math.cos(toRad(destinationLocation.latitude)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    return distance <= thresholdInMeters;
  };

  const handleDestinationClick = async () => {
    try {
      const coordinates = await fetchRouteDirections(
        userLocation,
        destination.coordinate
      );

      setSelectedDestination(destination);
      setRouteCoordinates(coordinates);

      if (isUserNearDestination(userLocation, destination.coordinate)) {
        Alert.alert(
          "You are near the destination",
          "Would you like to proceed to the next screen?",
          [
            {
              text: "Yes",
              onPress: () => navigation.navigate("TakePhoto"),
            },
            {
              text: "No",
              style: "cancel",
            },
          ]
        );
      }
    } catch (error) {
      console.error("Failed to fetch route:", error);
    }
  };

  if (!userLocation) {
    return (
      <View>
        <Button title="Loading..." />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={userLocation}
          title="You are here"
          pinColor="blue"
        />
        <Marker
          coordinate={destination.coordinate}
          title={destination.name}
          onPress={handleDestinationClick}
        />
        {routeCoordinates.length > 1 && (
          <Polyline coordinates={routeCoordinates} />
        )}
      </MapView>
    </View>
  );
};

export default LocalPositionScreen;
