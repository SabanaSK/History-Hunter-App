import { Pressable, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons";

const OutlinedButton = ({ pressHandler, icon, children }) => {
  return (
    <Pressable onPress={pressHandler}>
      <Ionicons name={icon} size={18} color="blue" />
      <Text>{children}</Text>
    </Pressable>
  );
};

export default OutlinedButton;