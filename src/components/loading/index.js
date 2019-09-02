import React from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./styles";

/**
 * @param {Number} size
 */
const Loading = ({ size }) => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size={size} />
    </View>
  );
};

export default Loading;
