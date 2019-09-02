import React from "react";
import { Input } from "react-native-ui-kitten";
import { Keyboard } from "react-native";

import styles from "./styles";

const TextInput = props => {
  return (
    <Input
      {...props}
      autoCorrect={false}
      clearButtonMode="always"
      style={[styles.textInput, props.extraStyles]}
      onSubmitEditing={Keyboard.dismiss}
      blurOnSubmit={false}
    />
  );
};

export default TextInput;
