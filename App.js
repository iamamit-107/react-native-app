import React, { useState } from "react";
import { View } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Camera",
    value: 3,
  },
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <Screen>
      <AppTextInput placeholder="email" icon="email" />
      <AppPicker
        selectedItem={selectedItem}
        onSelectItem={(item) => setSelectedItem(item)}
        items={categories}
        placeholder="Category"
        icon="apps"
      />
    </Screen>
  );
}
