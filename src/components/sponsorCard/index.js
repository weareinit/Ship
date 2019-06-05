import React from "react";
import {
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
  Modal,
  View,
  Text,
  Platform,
  Linking
} from "react-native";
import { SafeAreaView } from "react-navigation";

import styles from "./styles";
import Colors from "../../constants/Colors";
import IconWrapper from "../../components/iconWrapper";
import Button from "../../components/button";

class SponsorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBorder: false,
      showModal: false
    };
  }

  /**
   * toggles modal
   */
  shouldModalShow = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  /**
   * learn more action
   */
  learnMorePressed = () => {
    Linking.openURL(this.props.jobSiteLink).catch(err =>
      console.error("An error occurred", err)
    );
  };

  /**
   * Returns current logo
   */
  Logo = () => (
    <Image
      resizeMode="contain"
      style={styles.logo}
      source={{
        uri: this.props.logoUrl
      }}
    />
  );

  /**
   * returns modal with company info
   */
  FilterModal = () => (
    <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.showModal}
      onRequestClose={() => {
        alert("Modal has been closed.");
      }}
    >
      <ScrollView
        contentContainerStyle={styles.modalContainer}
        contentInsetAdjustmentBehavior="automatic"
      >
        <SafeAreaView style={styles.safeArea}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => {
              this.shouldModalShow();
            }}
          >
            <IconWrapper
              size={40}
              name={
                Platform.OS === "ios"
                  ? `ios-arrow-round-back`
                  : `md-arrow-round-back`
              }
              color={Colors.SHELL_DARK_BROWN}
            />
          </TouchableOpacity>
          {this.Logo()}
          <Text style={styles.subTitle}>{this.props.type}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
          <Button handlePress={this.learnMorePressed} title="Learn More" />
        </SafeAreaView>
      </ScrollView>
    </Modal>
  );

  render() {
    return (
      <TouchableOpacity
        activeOpacity={1} // default is .2
        style={[
          styles.container,
          this.state.showBorder ? styles.activeCard : {}
        ]}
        onPress={this.shouldModalShow}
        onPressIn={() => this.setState({ showBorder: true })}
        onPressOut={() => this.setState({ showBorder: false })}
      >
        {this.FilterModal()}
        {this.Logo()}
      </TouchableOpacity>
    );
  }
}
export default SponsorCard;
