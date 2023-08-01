import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({ children }) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
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