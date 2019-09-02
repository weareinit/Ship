import { StyleSheet } from "react-native";
import layout from "../../constants/Layout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: layout.defaultPadding,
    width: layout.width,
    height: layout.height,
    alignItems: "center",
    justifyContent: "center"
  },
  form_container: {
    width: layout.width * 0.9
  },
  welcome_message: {
    alignSelf: "center",
    marginBottom: 30
  },
  forgot_password: {
    alignSelf: "flex-end",
    marginBottom: 50
  },
  signup_container: {
    alignSelf: "center",
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  signup: {
    fontWeight: "700"
  },

  logo: {
    width: layout.width * 0.8,
    height: 100,
    alignSelf: "center",
    marginBottom: 50
  }
});

export default styles;
