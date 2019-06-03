import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  ImageBackground
} from "react-native";
import { SafeAreaView } from "react-navigation";

import { login } from "../../services";
//themed components
import { Button } from "../../components/button";
import IconWrapper from "../../components/iconWrapper";
import TextInput from "../../components/textInput";
import styles from "./styles";

const inputIconSize = 25;

class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      email: "",
      password: ""
    };

    this._updateState = this._updateState.bind(this);
  }

  //removes nav header
  static navigationOptions = {
    Header: null
  };

  render() {
    let display = this.state.showLogin ? (
      <View style={styles.formContainer}>
        <TextInput
          title="Email"
          placeholder="roary@fiu.edu"
          secureText={false}
          handleChange={text => this._updateState("email", text)}
          size={inputIconSize}
          iosIcon={"ios-mail"}
          mdIcon={"md-mail"}
          style={styles.inputIcons}
        />
        <TextInput
          title="Password"
          placeholder="*************"
          secureText={true}
          handleChange={text => this._updateState("password", text)}
          size={inputIconSize}
          iosIcon={"ios-lock"}
          mdIcon={"md-lock"}
          style={styles.inputIcons}
        />

        <Button title="Sign In" handlePress={this._signInAsync} />

        <TouchableOpacity style={styles.backButton} onPress={this._toggleLogin}>
          <IconWrapper
            style={styles.inputIcons}
            size={25}
            name={Platform.OS === "ios" ? `ios-arrow-back` : `md-arrow-back`}
          />
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.formContainer}>
        <Button title="Sign In" handlePress={this._toggleLogin} />
        <Button title="Forgot Password" handlePress={this._forgotPassword} />
        <Button title="Register" handlePress={this._register} />
      </View>
    );

    return (
      <ImageBackground
        source={{
          uri:
            "https://cdn.discordapp.com/attachments/399368683828281346/583735811418226690/beach-background.PNG"
        }}
        style={styles.background}
      >
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri:
                "https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/2_Disney_400.png"
            }}
            resizeMode="contain"
          />
          {display}
          <View style={styles.layoutTrick} />
        </SafeAreaView>
      </ImageBackground>
    );
  }

  _toggleLogin = () => {
    this.setState(prevState => ({ showLogin: !prevState.showLogin }));
  };

  _signInAsync = async () => {
    let credentials = {
      email: this.state.email,
      password: this.state.password
    };

    if (await login(credentials)) {
      this.props.navigation.navigate("Main");
    }
  };

  _signOutAsync = async () => {
    alert(this.state.email, this.state.password);
    // await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  _updateState = (variable, value) => {
    this.setState({ [variable]: value });
  };

  _forgotPassword = () => {};

  _register = () => {};
}
export default AuthScreen;
