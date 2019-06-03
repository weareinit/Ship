import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
export default class Map extends React.Component {
  static navigationOptions = {
    title: "Maps"
  };

  render() {
    return (
      <View style={styles.conatiner}>
        <Text>Map</Text>
      </View>
    );
  }
}
