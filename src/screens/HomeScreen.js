import React from "react";
import { Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";

export default function HomeScreen(props) {
  const{navigation} = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  }

  return (
    <SafeAreaView>
      <Navbar/>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}