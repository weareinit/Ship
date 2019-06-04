import React from "react";
import { Text, View, ListView } from "react-native";
import ScheduleFilter from "../../components/scheduleFilter";
import styles from "./styles";

class Event extends React.Component {
  static navigationOptions = {
    title: "Events"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  _toggleLogin = () => {
    alert("toggled");
  };
  render() {
    return (
      <View style={styles.container}>
        <ScheduleFilter />
        <Text>Schedule</Text>
      </View>
    );
  }
}

export default Event;
