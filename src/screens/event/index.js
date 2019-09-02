import React from "react";
import { Text, View, ListView } from "react-native";

import Filter from "../../components/scheduleFilter";
import Card from '../../components/eventCard'
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
        <Filter />
        <Text style={styles.title}>What's happening</Text>
        <Card />
      </View>
    );
  }
}

export default Event;
