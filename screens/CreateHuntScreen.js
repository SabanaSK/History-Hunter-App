import { View, StyleSheet, Text } from "react-native";
import { useState, useContext, useCallback, useLayoutEffect } from "react";

import Title from "../components/ui/Title";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { HuntContext } from "../store/HuntContext";
import LocationPicker from "../components/places/LocationPicker";
import IconButton from "../components/ui/IconButton";
import OutlinedButton from "../components/ui/OutlinedButton";

const CreateHuntScreen = ({ props, navigation }) => {
  const [enteredHuntTime, setEnteredHuntTime] = useState("");
  const [enteredHuntName, setEnteredHuntName] = useState("");
  const [location, setLocation] = useState();
  const { addHunt } = useContext(HuntContext);

  const locationHandler = useCallback((locationInfo) => {
    setLocation(locationInfo);
  }, []);

  /*   console.log("authCtx in createHunt", authCtx.token) */
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
      const newHunt = {
        name: enteredHuntName,
        estimatedTime: enteredHuntTime,
        location: location,
        // Add other properties as needed
      };

      addHunt(newHunt);
      setEnteredHuntTime("");
      setEnteredHuntName("");
    } catch (error) {
      console.error("Failed to create the hunt", error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <OutlinedButton
          name="person-add"
          size={24}
          color="black"
          pressHandler={() => navigation.navigate("InviteFriends")}
        >Invite friend</OutlinedButton>
      ),
    });
  }, [navigation]);

  return (
    <View>
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

      <LocationPicker locationHandler={locationHandler} />

      <Button onPress={submitHandler}> Create Hunt </Button>
    </View>
  );
};

export default CreateHuntScreen;
