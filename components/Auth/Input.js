import { View, Text, TextInput } from 'react-native';

const Input = ({ label, keyboardType }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput keyboardType={keyboardType} />
    </View>
  );
}

export default Input;