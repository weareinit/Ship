import React, { Fragment, useState, useEffect } from "react";
import { SafeAreaView, Image, Linking, Alert, StatusBar } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";
import { Formik } from "formik";

import validation from "../../utils/validation";
import asyncQueries from "../../utils/asyncQueries";
import routes from "../../services/routes";

import TextInput from "../../components/Input";
import Button from "../../components/Button";
import styles from "./styles";

const AuthScreen = props => {
  const [loading, setloading] = useState(false);
  const { style, themedStyle, navigation, ...restProps } = props;
  const { LoginValidation, LoginInitialValues } = validation;

  // Opens a URL on user's default browser
  _openURL = url => {
    Linking.openURL(url).catch(err => Alert("Something went wrong!", err));
  };

  // Signin user then navigate to home screen
  _signInAsync = values => {
    let credentials = {
      email: values.email,
      password: values.password
    };
    routes.login(credentials, props.navigation);
  };

  // Wipe out user local data and navigate to auth scren
  _signOutAsync = () => {
    asyncQueries.clear();
    props.navigation.navigate("Auth");
    async;
  };

  return (
    <Layout style={styles.container} {...restProps}>
      <SafeAreaView>
        <Layout style={styles.form_container}>
          <Formik
            initialValues={LoginInitialValues}
            validationSchema={LoginValidation}
            onSubmit={values => _signInAsync(values)}
          >
            {({
              values,
              errors,
              isValid,
              handleChange,
              handleSubmit,
              setFieldTouched
            }) => (
              <Fragment>
                <Image
                  source={{
                    uri:
                      "http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png"
                  }}
                  style={styles.logo}
                />
                {errors.email && (
                  <Text style={{ fontSize: 20, color: "red" }}>
                    {errors.email}
                  </Text>
                )}
                <TextInput
                  placeholder="roary@fiu.edu"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  extraStyles={errors.email && { borderColor: "red" }}
                />
                <TextInput
                  secureTextEntry={true}
                  placeholder="•••••••••"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  extraStyles={errors.password && { borderColor: "red" }}
                />
                <Text
                  style={styles.forgot_password}
                  onPress={() => {
                    _openURL(
                      "https://dashboard.shellhacks.net/forgot-password"
                    );
                  }}
                >
                  Forgot your password?
                </Text>
                <Button
                  title="Login"
                  size="giant"
                  disabled={!isValid}
                  onPress={handleSubmit}
                />
                <Layout style={styles.signup_container}>
                  <Text>Don't have an account? </Text>
                  <Text
                    style={styles.signup}
                    onPress={() => {
                      _openURL("https://dashboard.shellhacks.net/register");
                    }}
                  >
                    Sign Up
                  </Text>
                </Layout>
              </Fragment>
            )}
          </Formik>
        </Layout>
      </SafeAreaView>
    </Layout>
  );
};
export default AuthScreen;
