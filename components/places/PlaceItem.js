import { View, Text } from "react-native"

const PlaceItem = ({ place, pressHandler }) => {
  return (
    <View>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </View>
  );

  
};

export default PlaceItem;