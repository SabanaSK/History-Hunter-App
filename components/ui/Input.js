import { View, Text, TextInput, StyleSheet } from "react-native"

const Input = ({ label, textInputConfig}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput } {...textInputConfig} />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 80,
    marginVertical: 16,
  },
  label: {
    fontSize: 20,
  },

  textInput: {
    fontSize: 18,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "black",
    padding: 5,
    margin: 6,
    width: 200
  },
  
})
export default Input;