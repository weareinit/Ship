import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";

let { width, height } = Layout.window;

const styles = StyleSheet.create({
  container: {
    height: height / 4,
    width: "100%",
    marginTop: (height * 0.05) / 6,
    marginBottom: (height * 0.1) / 6 //10% of card height
  },
  activeCard: {
    borderBottomWidth: 0.7,
    borderColor: Colors.SHELL_MID_BROWN
  },
  modal: {
    backgroundColor: "transparent",
    paddingTop: height / 6
  },
  safeArea: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  modalContainer: {
    padding: Layout.defaultPadding
  },
  logo: {
    width: "100%",
    height: height / 4,
  },
  subTitle: {
    color: Colors.SHELL_PINK,
    fontSize: 22,
    fontWeight: "900",
    alignSelf: "flex-start",
    paddingTop: "5%",
    paddingBottom: "5%"
  },
  description: {
    color: Colors.SHELL_MID_BROWN,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: height / 12
  },
  backIcon: {
    alignSelf: "flex-start"
  }
});
export default styles;
