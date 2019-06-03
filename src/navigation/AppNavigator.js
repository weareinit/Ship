import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthStack from "./AuthNavigator";
import MainTabNavigator from "./MainTabNavigator";
import AuthLoadingScreen from "./AuthLoading";

/**
 * Creates Navigations on mount
 * then navigate to Auth or main App
 */
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: AuthLoadingScreen,
      Main: MainTabNavigator,
      Auth: AuthStack
    },

    {
      initialRouteName: "Loading"
    }
  )
);
