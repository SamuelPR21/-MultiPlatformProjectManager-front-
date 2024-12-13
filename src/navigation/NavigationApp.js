import React from "react";
import { View, StyleSheet } from "react-native";
import LoginForms from "../screens/Regisiter/LoginForm";
import NavegacionPrincipal from "../navigation/NavigationDrawer";

export default function NavigationApp() {
    const auth = null;

    return (
        <View style={styles.container}>
            {auth ? <NavegacionPrincipal /> : <LoginForms />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#f4f4f4",
    },
});
