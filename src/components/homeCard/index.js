import React from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import styles from "./styles";
import IconWrapper from "../IconWrapper";
import Colors from "../../constants/Colors";
class AnnoucementCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit." +
        " Iusto voluptatibus laudantium ducimus provident similique, incidunt soluta." +
        "Repellendus blanditiis, consectetur sequi, iure libero " +
        "laborum expedita eos repellat minus perferendis itaque voluptates.",
      tags: "#Giveaway #General",
      title: "Welcome To ShellHacks",
      time: "12 m ago"
    };
  }
  button = action => (
    <TouchableOpacity style={styles.button} onPress={action} />
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.title}</Text>

        <Text style={styles.subTitle}>{this.state.tags}</Text>

        <Text style={styles.description}>{this.state.description}</Text>

        <Text style={styles.description}>{"\n"}</Text>
        <View style={styles.tagsContainer}>
          <View style={styles.tags}>
            <IconWrapper
              size={15}
              name={Platform.OS === "ios" ? `ios-person` : `md-person`}
              color={Colors.SHELL_LIGHT_GRAY}
            />
            <Text style={styles.tagsText}>{"ShellHacks' Team "}</Text>
          </View>
          <View style={styles.tags}>
            <IconWrapper
              size={15}
              name={Platform.OS === "ios" ? `ios-clock` : `md-clock`}
              color={Colors.SHELL_LIGHT_GRAY}
            />
            <Text style={styles.tagsText}>{this.state.time}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default AnnoucementCard;
