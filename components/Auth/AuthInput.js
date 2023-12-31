import { TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../constants/Colors';

const AuthInput = ({
  value,
  placeholder,
  keyboardType,
  onUpdateValue
}) => {

  return (

    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onUpdateValue}
      value={value}
      keyboardType={keyboardType}
    />
    
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderWidth: 3,
    borderColor: Colors.gray,
    borderRadius: 5,
    padding: 5,
    margin: 10,
    width: 200,
    marginHorizontal: 45
  }
});

export default AuthInput;