import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Platform,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback
} from "react-native";
import { SafeAreaView } from "react-navigation";
import IconWrapper from "../iconWrapper";
import styles from "./styles";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

const filters = {
  TIME: "Time",
  TRACTS: "Tracks",
  WORKSHOP: "Workshops",
  ACTIVITY: "Activities",
  MEAL: "Meals"
};

/**
 * returns a button group
 * @props {Function} generalIsActive
 * @props {Function} favoriteIsActive
 * @props {Function} whichFilterIsActive
 */
class ScheduleFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalIsSelected: true,
      favoriteIsSelected: false,
      currentFilter: 0,
      showModal: false
    };
  }

  //toggle modal
  shouldModalShow = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  //selects an opition from the filtersList
  setSelectedOption = id => {
    this.setState({
      currentFilter: id
    });
  };

  //Modal
  FilterModal = () => (
    <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.showModal}
      onRequestClose={() => {
        alert("Modal has been closed.");
      }}
    >
      <SafeAreaView style={styles.safeArea}>
        <TouchableHighlight
          style={styles.backIcon}
          onPress={() => {
            this.shouldModalShow();
          }}
        >
          <IconWrapper
            size={40}
            name={Platform.OS === "ios" ? `ios-close` : `md-arrow-round-back`}
            color={Colors.SHELL_MID_BROWN}
          />
        </TouchableHighlight>
        <View>
          <Text style={styles.title}>Sort by</Text>
          {Object.values(filters).map((option, id) => (
            <TouchableOpacity
              style={styles.filterItemContainer}
              key={id}
              onPress={() => {
                this.setSelectedOption(id);
              }}
            >
              <IconWrapper
                size={50}
                name={Platform.OS === "ios" ? `ios-checkmark` : `md-checkmark`}
                color={
                  this.state.currentFilter === id
                    ? Colors.SHELL_DARK_BROWN
                    : Colors.SHELL_WHITE
                }
              />

              <Text
                style={[
                  styles.filterItem,
                  this.state.currentFilter === id
                    ? { color: Colors.SHELL_DARK_BROWN }
                    : {}
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </Modal>
  );

  render() {
    return (
      <View style={styles.buttonGroupContainer}>
        {this.FilterModal()}
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
              // this.props.handlePress();
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
              // this.props.handlePress();
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
          onPress={() => {
            this.shouldModalShow();
            // this.props.handlePress();
          }}
        >
          <IconWrapper
            size={Layout.menuIconSize}
            name={Platform.OS === "ios" ? `ios-funnel` : `md-funnel`}
            color={
              this.state.filter
                ? Colors.SHELL_DARK_BROWN
                : Colors.SHELL_DARK_BROWN
            }
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ScheduleFilter;
