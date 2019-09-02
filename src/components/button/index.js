import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Layout, Button as ButtonWrapper } from "react-native-ui-kitten";

import styles from "./styles";

/**
 * Returns a button
 * @param {String} title
 * @param {Function} handlePress
 */
const Button = ({ title, ...rest }) => {
  return (
    <ButtonWrapper {...rest} style={styles.buttonStyles}>
      {title}
    </ButtonWrapper>
  );
};

export default Button;
