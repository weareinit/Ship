import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: Layout.defaultPadding,
    flex: 1,
    backgroundColor: "#fff"
  },
  userMessage: {
    fontSize: 25,
    fontWeight: "700",
    color: Colors.SHELL_LIGHT_GRAY,
    
  }
});
export default styles;
