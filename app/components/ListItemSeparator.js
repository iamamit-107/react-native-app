import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function ListItemSeparator() {
  return <View style={styles.separtior}></View>;
}

const styles = StyleSheet.create({
  separtior: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
