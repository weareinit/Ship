import React from "react";
import { TouchableOpacity, Text, View, Platform } from "react-native";
import IconWrapper from "../iconWrapper";
import styles from "./styles";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

/**
 * returns a button
 * @param {String} title
 * @param {Function} handlePress
 */
const Button = props => {
  return (
    <TouchableOpacity style={styles.buttonStyles} onPress={props.handlePress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

/**
 * returns a button group
 * @props {Function} generalIsActive
 * @props {Function} favoriteIsActive
 * @props {Function} filterIsActive
 */
class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalIsSelected: true,
      favoriteIsSelected: false,
      filter: null
    };
  }
  render() {
    return (
      <View style={styles.buttonGroupContainer}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.buttonGroupItem,
              this.state.generalIsSelected ? styles.isSecled : {}
            ]}
            onPress={() => {
              this.setState({
                generalIsSelected: true,
                favoriteIsSelected: false
              });
              this.props.handlePress;
            }}
          >
            <Text
              style={this.state.generalIsSelected ? styles.isSecledText : {}}
            >
              General
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonGroupItem,
              this.state.favoriteIsSelected ? styles.isSecled : {}
            ]}
            onPress={() => {
              this.setState({
                generalIsSelected: false,
                favoriteIsSelected: true
              });
              this.props.handlePress;
            }}
          >
            <Text
              style={this.state.favoriteIsSelected ? styles.isSecledText : {}}
            >
              Favorites
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonGroupFilter}
          onPress={this.props.handlePress}
        >
          <IconWrapper
            size={Layout.menuIconSize}
            name={Platform.OS === "ios" ? `ios-funnel` : `md-funnel`}
            color={
              this.state.filter
                ? Colors.SHELL_DARK_BROWN
                : Colors.SHELL_LIGHT_BROWN
            }
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export { Button, ButtonGroup };
