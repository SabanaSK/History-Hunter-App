import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../constants/styles';

const Input = ({ value, placeholder }) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderWidth: 3,
    borderColor: Colors.gray,
    borderRadius: 5,
    padding: 5,
    margin: 6,
    width: 200
  }
});
export default Input;