import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.container}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContent}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell, what we don't need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Login" handlePress={() => console.log("press")} />
        <Button
          title="Register"
          handlePress={() => console.log("press")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  tagline: { fontSize: 25, paddingVertical: 20 },
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
