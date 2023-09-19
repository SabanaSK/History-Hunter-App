import { Text, View, Image, StyleSheet } from "react-native";

import { createLocationUrl } from "../util/location";
import Button from "../components/ui/Button";
import { Colors } from "../constants/Colors";

const ConfirmHuntScreen = ({ route, navigation }) => {
  const { details } = route.params;
  const huntLocationUrl = createLocationUrl(details.location);

  const continueHandler = async () => {
    navigation.navigate("LocalPosition", { details: details });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Hunt</Text>
      <View style={styles.wrapper}>
        <Text style={styles.text}>You picked:</Text>
        <Text style={styles.smallText}>{details.name}</Text>
      </View>
      <Text style={styles.describtion}>
        Here is the route you will be taking
      </Text>
      <Image
        style={{ width: 400, height: 200 }}
        source={{ uri: huntLocationUrl }}
      />
      <Text style={styles.address}>{details.location.address}</Text>
      <View style={styles.wrapperBottom}>
        <Text style={styles.text}>You should take approximately:</Text>
        <Text style={styles.smallText}>{details.estimatedTime}</Text>
      </View>
      <Button onPress={continueHandler}>Confirm</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    color: Colors.purple,
  },
  wrapper: {
    flexDirection: "row",
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  smallText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  describtion: {
    fontSize: 20,
    padding: 15,
  },
  wrapperBottom: {
    flexDirection: "row",
    padding: 10,
    paddingBottom: 40,
  },
  address: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 5,
  },
});

export default ConfirmHuntScreen;
