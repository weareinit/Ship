import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default class Profile extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}
