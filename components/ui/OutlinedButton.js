import { View, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

const OutlinedButton = ({ pressHandler, icon, children }) => {
  return (
    <Pressable onPress={pressHandler} style={styles.buttonContainer}>
      <Ionicons name={icon} size={18} color={Colors.pink} />
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.purple,
  },
  buttonText: {
    marginLeft: 5,
    color: Colors.pink,
  },
});

export default OutlinedButton;
