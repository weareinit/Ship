import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Wrapper from "../../components/screenWrapper";
import AnnoucementCard from "../../components/cards/announcements";
export default class Home extends React.Component {
  static navigationOptions = {
    title: "Announcements"
  };

  render() {
    return (
      <Wrapper>
        <ScrollView style={styles.container}>
          <Text>Hello, John Doe</Text>
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
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  }
});
