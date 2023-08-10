import { View } from "react-native"
import { useState } from "react";

import Input from "../ui/Input";
import Button from "../ui/Button";


const CreateForm = () => {
  const [valueInputs, setValueInputs] = useState({

    time: "",
    name: "",
  })

  const inputHandler = (valueInputProperty, text) => {
    console.log('ValueInputProperty:', valueInputProperty, 'with text:', text);
    console.log('value', valueInputs)
    setValueInputs(prev => ({
      ...prev,
      [valueInputProperty]: text,
    }));
  };

  /* Problem with the cycle, when write 44 it only show 4 so one is missing for ValueInput but ValueInputProperty works */



  return (
    <View>


      <Input
        label="How long should it be?"
        textInputConfig={{
          onChangeText: inputHandler.bind(this, "time"),
          placeholder: "3 hours? 2days? You pick"
          /* Kan lägga till max längd och keyboardtype */
          /* hur vet man om det är 3 dag eller två veckor */
        }}
      />
      <Input
        label="What do you want to call your hunt? "
        textInputConfig={{
          onChangeText: inputHandler.bind(this, "name"),
          placeholder: "Name"
          /* Kan lägga till max längd och keyboardtype */
        }}
      />
      <Button>Continue</Button>
      {/* Den ska navigera vidare, kanske behöver context */}
    </View>
  )
};

export default CreateForm;