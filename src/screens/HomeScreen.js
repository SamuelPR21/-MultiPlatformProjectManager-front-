import React from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(props) {
  const{navigation} = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  }

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Button onPress={goToPage} title="Go to Settings" />
    </SafeAreaView>
  );
}