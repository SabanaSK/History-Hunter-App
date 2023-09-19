import { Text, View, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

const Input = ({ label, onUpdateValue, placeholder }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onUpdateValue}
        placeholder={placeholder}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: Colors.gray,
    borderRadius: 10,
    padding: 6,
    margin: 15,
    width: 200,
  },
});

export default Input;
