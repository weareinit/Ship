import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { Text } from "react-native";
import Wrapper from "../../components/screenWrapper";

export default class Map extends React.Component {
  static navigationOptions = {
    title: "Maps"
  };

  render() {
    return (
      <Wrapper>
        <Text>Map</Text>
      </Wrapper>
    );
  }
}

// /* Go ahead and delete ExpoConfigView and replace it with your
//  * content, we just wanted to give you a quick view of your config */
// return <ExpoConfigView />;
