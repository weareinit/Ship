import React from "react";
import { StatusBar, View } from "react-native";

import Loading from "../components/Loading";
import routes from "../services/routes";
import { loadingStyles } from "./styles";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Check if user is logged in then navigate to the appropriate screen
  _bootstrapAsync = async () => {
    const route = routes.isAuthorized() ? "Main" : "Auth";
    console.log(routes.isAuthorized());
    setTimeout(() => {
      this.props.navigation.navigate(route);
    }, 1000); //timer is for testing purposes
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
