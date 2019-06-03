import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";

let { width, height } = Layout.window;

const styles = StyleSheet.create({
  container: {
    height: height / 2.2,
    width: "100%",
    padding: (height * 0.1) / 3, //6% of card height
    borderRadius: (height * 0.08) / 3, //5% of card height
    marginTop: (height * 0.05) / 3,
    marginBottom: (height * 0.1) / 3, //10% of card height
    borderWidth: 0.5,
    borderColor: Colors.SHELL_LIGHT_BROWN,
    backgroundColor: Colors.SHELL_TEAL
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 4
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 4.65,

    // elevation: 8
  },
  title: Object.assign(Layout.heading, {
    color: Colors.SHELL_WHITE
  }),
  subTitle: Object.assign(Layout.subHeading, {
    color: Colors.SHELL_LIGHT_GRAY
  }),
  description: Object.assign(Layout.body, { color: "white" }),
  tagsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tags: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  tagsText: {
    marginLeft: 5,
    fontSize: 12,
    color: Colors.SHELL_LIGHT_GRAY
  }
});
export default styles;
