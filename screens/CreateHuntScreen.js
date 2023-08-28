import { View } from "react-native"
import { useState, useContext } from "react"

import Title from "../components/ui/Title"
import Input from "../components/ui/Input"
import Button from "../components/ui/Button"
import { HuntContext } from "../store/HuntContext"


const CreateHuntScreen = (props) => {
  const [enteredHuntTime, setEnteredHuntTime] = useState('');
  const [enteredHuntName, setEnteredHuntName] = useState('');
  const { addHunt } = useContext(HuntContext);

/*   console.log("authCtx in createHunt", authCtx.token) */
  const updateCreateInputValueHandler = (inputType, enteredValue) => {
    switch (inputType) {
      case 'hunt-time':
        setEnteredHuntTime(enteredValue);
        break;
      case 'hunt-name':
        setEnteredHuntName(enteredValue);
        break;
    }
  }

  const submitHandler = async () => {
    try {
      const newHunt = {
        name: enteredHuntName,
        estimatedTime: enteredHuntTime
        // Add other properties as needed
      };

      addHunt(newHunt);

      setEnteredHuntTime('');
      setEnteredHuntName('');
    } catch (error) {
      console.error("Failed to create the hunt", error);

    }
  };


  return (
    <View >
      <Title title={"Customize"} />

      <Input
        placeholder="3 hours? 2days? you pick"
        value={enteredHuntTime}
        onUpdateValue={(value) => updateCreateInputValueHandler('hunt-time', value)}
        label='How long should it be?'
        textInputConfig={{
          keyboardType: 'default',
        }}
      />
      <Input
        placeholder="Name"
        value={enteredHuntName}
        onUpdateValue={(value) => updateCreateInputValueHandler('hunt-name', value)}
        label='What do you want to call your hunt?'
        textInputConfig={{
          keyboardType: 'default',
        }}
      />


      {/* Pick Location import to here */}
      {/* Invite Friends */}
      <Button onPress={submitHandler}> Create Hunt </Button>

    </View>
  )
}

export default CreateHuntScreen;