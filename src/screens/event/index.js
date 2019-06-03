import React from "react";
import { Platform, StyleSheet, Text, View, ListView } from "react-native";
import Wrapper from "../../components/screenWrapper";

class Event extends React.Component {
  static navigationOptions = {
    title: "Events"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <Text>Schedule</Text>
      </Wrapper>
    );
  }
}

export default Event;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
