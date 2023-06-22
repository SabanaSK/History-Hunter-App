import { Pressable, Text, StyleSheet } from 'react-native';

const Button = () => {
  return (
    <Pressable style={styles.button}> 
      <Text style={styles.text}>Log In</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
    borderColor: '#000',
    alignItems: 'center',
    width: 250,
  },
  text: {
    color: '#fff',
  }
});

export default Button;