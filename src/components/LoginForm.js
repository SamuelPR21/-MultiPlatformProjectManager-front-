import React from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginForms() {

    return (
        <View>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <Button title="Login" />
        </View>
    );

}