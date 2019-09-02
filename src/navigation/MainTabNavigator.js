import React from "react";
import { View } from "react-native";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import IconWrapper from "../components/IconWrapper";
import { tabBarOptions, defaultStyles, iconStyle } from "./styles";
/**
 * App Main screens
 */
import Home from "../screens/Home";
import Sponsor from "../screens/Sponsor";
import Map from "../screens/Map";
// import Event from "../screens/Event";
import Profile from "../screens/Profile";

const HomeStack = createStackNavigator(
  {
    Home: Home
  },
  defaultStyles
);

HomeStack.navigationOptions = {
  tabBarLabel: <View />, //trick to show no label
  tabBarIcon: ({ focused }) => (
    <IconWrapper
      focused={focused}
      style={iconStyle.style}
      size={iconStyle.size}
      name={
        Platform.OS === "ios" ? `ios-notifications` : "md-information-circle"
      }
    />
  ),
  tabBarOptions
};

const ProfileStack = createStackNavigator(
  {
    Profile: Profile
  },
  (style = defaultStyles)
);

ProfileStack.navigationOptions = {
  tabBarLabel: <View />,
  tabBarIcon: ({ focused }) => (
    <IconWrapper
      focused={focused}
      style={iconStyle.style}
      size={iconStyle.size}
      name={Platform.OS === "ios" ? `ios-person` : "md-person"}
    />
  ),
  tabBarOptions
};

const MapStack = createStackNavigator(
  {
    Links: Map
  },
  (style = defaultStyles)
);

MapStack.navigationOptions = {
  tabBarLabel: <View />,
  tabBarIcon: ({ focused }) => (
    <IconWrapper
      focused={focused}
      style={iconStyle.style}
      size={iconStyle.size}
      name={Platform.OS === "ios" ? "ios-map" : "md-map"}
    />
  ),
  tabBarOptions
};

const SponsorStack = createStackNavigator(
  {
    Sponsor: Sponsor
  },
  (style = defaultStyles)
);

SponsorStack.navigationOptions = {
  tabBarLabel: <View />,
  tabBarIcon: ({ focused }) => (
    <IconWrapper
      focused={focused}
      style={iconStyle.style}
      size={iconStyle.size}
      name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
    />
  ),
  tabBarOptions
};

// const EventStack = createStackNavigator(
//   {
//     Schedule: Event
//   },
//   (style = defaultStyles)
// );

// EventStack.navigationOptions = {
//   tabBarLabel: <View />,
//   tabBarIcon: ({ focused }) => (
//     <IconWrapper
//       focused={focused}
//       style={iconStyle.style}
//       size={iconStyle.size}
//       name={Platform.OS === "ios" ? "ios-calendar" : "md-calendar"}
//     />
//   ),
//   tabBarOptions
// };

export default createBottomTabNavigator(
  {
    Profile: { screen: ProfileStack },
    // Schedule: { screen: EventStack },
    Home: { screen: HomeStack },
    Map: { screen: MapStack },
    Sponsors: { screen: SponsorStack }
  },
  {
    initialRouteName: "Home"
  }
);
