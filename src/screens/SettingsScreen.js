import React from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function SettingsScreen(props) {

    const {navigation} = props;
    const goToHome = (pageName) => {
        navigation.navigate(pageName);
    };
    return (
        <SafeAreaView>
            <Text>Settings Screen</Text>    
            <Text>Settings Screen</Text>    
            <Text>Settings Screen</Text>    
            <Text>Settings Screen</Text>    
            <Text>Settings Screen</Text>    
            <Text>Settings Screen</Text>    
            <Text>Settings Screen</Text>    
            <Text>Settings Screen</Text>    
            <Text>Settings Screen</Text>    
            <Text>Settings Screen</Text>    
            <Button onPress={() => goToHome("Home")} title="Go to Home" />

        </SafeAreaView>
        );
}