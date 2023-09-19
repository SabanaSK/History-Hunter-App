import { View, StyleSheet, Text } from "react-native";
import {
  useState,
  useContext,
  useCallback,
  useLayoutEffect,
  useEffect,
} from "react";

import Title from "../components/ui/Title";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import LocationPicker from "../components/places/LocationPicker";
import { FriendsContext } from "../store/FriendsContext";
import { HuntContext } from "../store/HuntContext";
import { UserContext } from "../store/UserContext";
import IconButton from "../components/ui/IconButton";

const CreateHuntScreen = ({ navigation }) => {
  const [enteredHuntTime, setEnteredHuntTime] = useState("");
  const [enteredHuntName, setEnteredHuntName] = useState("");
  const [creator, setCreator] = useState("");
  const [location, setLocation] = useState();
  const { addHunt } = useContext(HuntContext);
  const { selectedFriends } = useContext(FriendsContext);
  const userCtx = useContext(UserContext);

  useEffect(() => {
    setCreator(userCtx.currentUser);
  }, [userCtx]);

  const locationHandler = useCallback((locationInfo) => {
    setLocation(locationInfo);
  }, []);

  const updateCreateInputValueHandler = (inputType, enteredValue) => {
    switch (inputType) {
      case "hunt-time":
        setEnteredHuntTime(enteredValue);
        break;
      case "hunt-name":
        setEnteredHuntName(enteredValue);
        break;
    }
  };

  const submitHandler = async () => {
    try {
      const updatedCreator = { ...creator, status: "Active" };

      const updatedSelectedFriends = selectedFriends.map((friend) => ({
        ...friend,
        status: "Planned",
      }));

      const newHunt = {
        name: enteredHuntName,
        estimatedTime: enteredHuntTime,
        location: location,
        invitees: updatedSelectedFriends,
        creator: updatedCreator,
      };

      addHunt(newHunt);
      setEnteredHuntTime("");
      setEnteredHuntName("");
      navigation.navigate("Start");
    } catch (error) {
      console.error("Failed to create the hunt", error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="person-add"
          size={40}
          onPress={() => navigation.navigate("InviteFriends")}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Title title={"Customize"} />

        <Input
          placeholder="3 hours? 2days? you pick"
          value={enteredHuntTime}
          onUpdateValue={(value) =>
            updateCreateInputValueHandler("hunt-time", value)
          }
          label="How long should it be?"
        />
        <Input
          placeholder="Name"
          value={enteredHuntName}
          onUpdateValue={(value) =>
            updateCreateInputValueHandler("hunt-name", value)
          }
          label="What do you want to call your hunt?"
        />
      </View>
      <LocationPicker locationHandler={locationHandler} />
      <View style={styles.btnContainer}>
        <Button onPress={submitHandler}> Create Hunt </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    padding: 20,
  },
  selectedFriends: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  friendContainer: {
    margin: 5,
  },
  text: {
    color: "#2EFF00",
    fontSize: 20,
  },
  btnContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  
});

export default CreateHuntScreen;
