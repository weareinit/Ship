import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const IconWrapper = props => {
  return (
    <Ionicons
      name={props.name}
      size={props.size}
      color={
        props.color
          ? props.color
          : props.focused
          ? Colors.tabIconSelected
          : Colors.tabIconDefault
      }
    />
  );
};

export default IconWrapper;
