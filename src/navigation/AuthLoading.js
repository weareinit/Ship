import React from "react";
import { StatusBar, View } from "react-native";

import Loading from "../components/loading";
import { isLoggedIn } from "../services";
import { loadingStyles } from "./styles";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  /**
   * Navigates to apropriate screen based on wether user is logged in or not
   */
  _bootstrapAsync = async () => {
    setTimeout(() => {
      this.props.navigation.navigate(isLoggedIn ? "Main" : "Auth");
    }, 1000); //timer is temporary...for testing purposes
  };

  render() {
    return (
      <View style={loadingStyles}>
        <StatusBar barStyle="default" />
        <Loading size={"large"} />
      </View>
    );
  }
}
export default AuthLoadingScreen;
