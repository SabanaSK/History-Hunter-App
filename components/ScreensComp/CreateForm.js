import { ScrollView, TextInput, View, Text } from "react-native"

import ImagePicker from "../ui/ImagePicker";

const CreateForm = () => {
  return (
    <ScrollView>
      <View>
        <Text>Title</Text>
        <TextInput />
      </View>
      <ImagePicker/>
    </ScrollView>
  )
};

export default CreateForm;