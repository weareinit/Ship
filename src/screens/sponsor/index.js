import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
export default class Sponsor extends React.Component {
  static navigationOptions = {
    title: "Sponsors"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sponsor</Text>
      </View>
    );
  }
}
