import Layout from "../constants/Layout";

const defaultStyles = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#FBEDCA"
    },
    headerTitleStyle: {
      fontWeight: "900",
      color: "#675C50",
      textAlign: "left",
      flex: 1,
      fontSize: 30
    }
  }
};

const iconStyle = {
  style: { marginBottom: -3 },
  size: Layout.menuIconSize
};

const tabBarOptions = {
  style: {
    backgroundColor: "#FBEDCA"
  }
};

const loadingStyles = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FBEDCA"
};

export { defaultStyles, iconStyle, tabBarOptions, loadingStyles };
