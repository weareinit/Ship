import React from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import styles from "./styles";
import IconWrapper from "../iconWrapper";
class AnnoucementCard extends React.Component {
  button = action => (
    <TouchableOpacity style={styles.button} onPress={action} />
  );

  render() {
    return (
      <View style={styles.container}>
        {/* {this.button()} */}
        <Text> Cool Rile Here</Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          voluptatibus laudantium ducimus provident similique, incidunt soluta.
          Repellendus blanditiis, consectetur sequi, iure libero laborum
          expedita eos repellat minus perferendis itaque voluptates.
        </Text>
      </View>
    );
  }
}
export default AnnoucementCard;
