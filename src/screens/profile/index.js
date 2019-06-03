import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Wrapper from "../../components/screenWrapper";

export default class Profile extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    return (
      <Wrapper>
        <View style={styles.container}>
          <Text>Profile</Text>
          {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
          {/* <ExpoLinksView /> */}
        </View>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
