import { createStackNavigator } from "react-navigation";
import AuthScreen from "../screens/Auth";

const AuthStack = createStackNavigator(
  { SignIn: AuthScreen },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default AuthStack;
