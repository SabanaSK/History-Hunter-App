import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { useLayoutEffect, useState } from 'react';

import IconButton from '../components/ui/IconButton';

const MapScreen = ({ navigation }) => {
  const [pickedLocation, setPickedLocation] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        <IconButton
          icon="save"
          size={24}
          color="black" />
    })
  }, []);

  const pressHandler = (event) => {
    const latitude = event.nativeEvent.coordinate.latitude;
    const longitude = event.nativeEvent.coordinate.longitude;
    setPickedLocation({ latitude, longitude });
  };

  const initialRegion = {
    latitude: 57.708870,
    longitude: 11.97456,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.421,
  };


  return (
    <MapView style={styles.container} initialRegion={initialRegion} onPress={pressHandler}>
      {pickedLocation && (<Marker coordinate={pickedLocation} />)}
    </MapView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default MapScreen;