import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default (styles = StyleSheet.create({
  buttonStyles: {
    padding: 15,
    marginTop: 40,
    borderRadius: 25,
    width: "80%",
    backgroundColor: Colors.SHELL_LIGHT_BROWN,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: Colors.SHELL_SAND
  },
  buttonText: {
    color: Colors.SHELL_WHITE,
    fontWeight: "900"
  }
}));
