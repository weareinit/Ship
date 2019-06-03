import React from "react";
import { View } from "react-native";
import styles from "./styles";

/**
 * Default set up for all screens
 */
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={styles.wrapper}>{this.props.children}</View>;
  }
}

export default Wrapper;
