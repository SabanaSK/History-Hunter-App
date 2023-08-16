import { ScrollView, TextInput, View, Text } from "react-native"

import ImagePicker from "./ImagePicker";
import LocationPicker from "../places/LocationPicker";

const CreateForm = () => {
  return (
    <ScrollView>
      <View>
        <Text>Title</Text>
        <TextInput />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  )
};

export default CreateForm;