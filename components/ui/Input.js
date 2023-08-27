import { Text, View, TextInput } from "react-native"


const Input = ({ label, onUpdateValue, textInputConfig }) => {
  const { isInvalid } = textInputConfig;
  return (
    <View>
      <Text>
        {label}
      </Text>
      <TextInput
        onChangeText={onUpdateValue}
        {...textInputConfig}
      />
    </View>
  )
}


export default Input;
