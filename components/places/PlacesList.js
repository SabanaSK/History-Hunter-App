import { FlatList, View, Text } from "react-native";

const PlacesList = ({places}) => {
  if(!places || places.length < 1) {
    return(
      <View>
        <Text>No places added yet!</Text>
      </View>
    )
  }
  return (
  <FlatList
  data={places} 
  keyExtractor={(item) => item.id} 
  renderItem={({item}) => <PlaceItem place={item} />} 
  />
  )
};

export default PlacesList;