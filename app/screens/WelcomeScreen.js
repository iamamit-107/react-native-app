import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContent}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell, what we don't need</Text>
      </View>

      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContent: {
    position: "absolute",
    top: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
