import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

class EventCard extends React.Component {
  button = action => (
    <TouchableOpacity style={styles.button} onPress={action} />
  );

  render() {
    return <View>{button}</View>;
  }
}
export default EventCard ;
