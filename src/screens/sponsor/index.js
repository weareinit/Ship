import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Wrapper from "../../components/screenWrapper";

export default class Sponsor extends React.Component {
  static navigationOptions = {
    title: "Sponsors"
  };

  render() {
    return (
      <Wrapper>
        <View style={styles.container}>
          <Text>Sponsor</Text>
        </View>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
