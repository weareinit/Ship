import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export default (styles = StyleSheet.create({
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
  isSecledText: { color: Colors.SHELL_WHITE },
  modalContainer: {
    backgroundColor: "transparent"
  },
  modal: {
    backgroundColor: "transparent"
  },
  safeArea: {
    padding: Layout.defaultPadding,
    backgroundColor: "white",
    height: "100%",
    alignItems: "center"
  },
  title: {
    color: Colors.SHELL_DARK_BROWN,
    fontSize: 30,
    fontWeight: "700",
    marginTop: "10%",
    marginBottom: "10%",
    alignSelf: "center"
  },
  filterItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginRight: 50 //to make up for icon size
  },
  filterItem: {
    color: Colors.SHELL_LIGHT_BROWN,
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
    marginLeft: 10
  },
  backIcon: {
    alignSelf: "flex-end"
  }
}));
