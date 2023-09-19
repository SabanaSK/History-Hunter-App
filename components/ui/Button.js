import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const Button = ({ children, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.purple,
    padding: 10,
    borderRadius: 20,
    borderColor: "#000",
    alignItems: "center",
    width: 250,
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
});

export default Button;
