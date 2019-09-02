import { StyleSheet } from "react-native";

import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: Layout.defaultPadding,
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    // color: Colors.SHELL_TEAL
  }
});
export default styles;
