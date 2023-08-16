import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

const MapScreen = () => {
  const [pickedLocation, setPickedLocation] = useState();

  const initialRegion = {
    latitude: 57.708870,
    longitude: 11.97456,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.421,
  };

  const pressHandler = (event) => {
    const latitude = event.nativeEvent.coordinate.latitude;
    const longitude = event.nativeEvent.coordinate.longitude;
    console.log(latitude, longitude);
    setPickedLocation({ latitude, longitude });
  };
  return (
    <MapView style={styles.container} initialRegion={initialRegion} onPress={pressHandler}>
      {pickedLocation && <Marker coordinate={pickedLocation} />}
    </MapView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default MapScreen;