import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375,
  screenContainer: {
    padding: "5%"
  },
  heading: {
    fontSize: 30,
    color: "black",
    fontWeiht: 900
  },
  subHeading: {
    fontSize: 18,
    color: "gray",
    fontWeiht: 900
  },
  body: {
    fontSize: 14,
    color: "brown",
    fontWeiht: 900
  },
  
};
