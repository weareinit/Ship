import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height
  },
  width,
  height,
  isSmallDevice: width < 375,
  defaultPadding: "5%",

  heading: {
    fontSize: 35,
    fontWeight: "900"
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "700"
  },
  body: {
    fontSize: 14,
    fontWeight: "500"
  },
  menuIconSize: 32
};
