import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: Layout.defaultPadding,
    backgroundColor: "#FFF"
  },
  title: {
    fontSize: 22,
    color: Colors.SHELL_LIGHT_BROWN,
    fontWeight: "900",
    alignSelf: "center",
    marginTop: "5%"
  }
});
export default styles;
