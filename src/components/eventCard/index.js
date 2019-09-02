import React from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";

import styles from "./styles.js";
import IconWrapper from '../IconWrapper';
import Colors from "../../constants/Colors";

class Card extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.subTitle}>#Workshop</Text>
        <View>
          <Text style={styles.tagsText}>
            <IconWrapper
              size={13}
              name={Platform.OS === "ios" ? `ios-clock` : `md-clock`}
              color={Colors.SHELL_LIGHT_GRAY}
            />
            {"Saturday 26th | 2:00PM"}
          </Text>

          <Text style={styles.tagsText}>
            <IconWrapper
              size={15}
              name={Platform.OS === "ios" ? `ios-pin` : `md-pin`}
              color={Colors.SHELL_LIGHT_GRAY}
            />
            {"PG6 116"}
          </Text>
          <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem maiores corporis cupiditate vero cum libero expedita quis sed similique eius, inventore nam quasi aliquam fugit aspernatur! Cum, rem perferendis.</Text>
          <Text style={styles.tagsText}>
            <IconWrapper
              size={15}
              name={Platform.OS === "ios" ? `ios-person` : `md-person`}
              color={Colors.SHELL_LIGHT_GRAY}
            />
            {"Microsoft"}
          </Text>
        </View>
      </View>
    );
  }
}
export default Card;
