import { Dimensions } from "react-native";
import Colors from "./Colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375,
  defaultPadding: "5%",
 
  heading: {
    fontSize: 35,
    fontWeight: "900",
    marginBottom:  (height * 0.1) / 3
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom:  (height * 0.1) / 4
  },
  body: {
    fontSize: 14,
    fontWeight: "500"
  }
};
