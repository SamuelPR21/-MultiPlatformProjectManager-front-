import React from "react";
import { TextInput, Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginForms() {

    return (
        <SafeAreaView>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <Button title="Login" />
        </SafeAreaView>
    );

}