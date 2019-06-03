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
  },
  buttonGroupContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 35
  },
  buttonGroup: {
    width: "88%",
    borderRadius: 25,
    borderWidth: 0.5,
    flexDirection: "row",
    height: "100%"
  },
  buttonGroupItem: {
    flex: 0.5,
    height: "100%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonGroupFilter: {
    alignSelf: "flex-end"
  },
  isSecled: { backgroundColor: Colors.SHELL_DARK_BROWN, borderWidth: 0.5 },
  isSecledText: { color: Colors.SHELL_WHITE }
}));
