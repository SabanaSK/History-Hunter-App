import { Text, View } from "react-native";

const ConfirmHuntScreen = ({ route }) => {
  const { details } = route.params;

  return (
    <View>
      <Text>Name: {details.name}</Text>
      {/* Display other details here */}
    </View>
  );
};

export default ConfirmHuntScreen;
