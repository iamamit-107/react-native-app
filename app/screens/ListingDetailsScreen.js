import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.price}>$199</Text>

        <View style={styles.userContainer}>
          <ListItem
            title="Mosh Hamedani"
            subtitle="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  textContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
