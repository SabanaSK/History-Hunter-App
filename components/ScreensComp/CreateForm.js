import { View } from "react-native"

import Input from "../ui/Input";
import Button from "../ui/Button";

const CreateForm = () => {
  const amountHandler = (text) => {
    console.log("amountHandler", text)
  }; 
  const nameHandler = (text) => {
    console.log("nameHandler", text)
  };

  return(
  <View>
    <Input
    label="How long should it be?" 
    textInputConfig={{
      onChangeText: amountHandler,
      placeholder: "3 hours? 2days? You pick"
      /* Kan lägga till max längd och keyboardtype */
    }}
    />
     <Input
    label="What do you want to call your hunt? "
    textInputConfig={{
      onChangeText: nameHandler,
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