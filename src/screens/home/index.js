import React from "react";
import { Text, View, ScrollView } from "react-native";
import AnnoucementCard from "../../components/homeCard";
import styles from "./styles";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Good Morning, Here's what's happening."
    };
  }
  static navigationOptions = {
    title: "Announcements"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.userMessage}>{this.state.message}</Text>
        <AnnoucementCard />
        <AnnoucementCard />
        <AnnoucementCard />
        <AnnoucementCard />
        <AnnoucementCard />
        <AnnoucementCard />
        <AnnoucementCard />
        <AnnoucementCard />
        <AnnoucementCard />
      </ScrollView>
    );
  }
}
