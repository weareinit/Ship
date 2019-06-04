import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default (styles = StyleSheet.create({
  buttonStyles: {
    padding: 15,
    marginTop: 40,
    borderRadius: 25,
    width: "100%",
    backgroundColor: Colors.SHELL_DARK_BROWN,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "black"
  },
  buttonText: {
    color: Colors.SHELL_WHITE,
    fontWeight: "900"
  }
}));
